<?php // Julie specific local
namespace App\Service;

use App\Entity\ProductEntity;
use App\Resource\DbResource;

class ProductHelperService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function __construct() {
		$this->productService = ProductService::create();
		$this->transactionService = TransactionService::create();
		$this->userService = UserService::create();
	}

	private function addTransaction($productId, $count, $cost, $userId) {
		$transactionEntity = $this->transactionService->newEntity([
			'product_id' => $productId,
			'count' => $count,
			'cost' => $cost
		]);
		$userRow = $this->userService->getUser(['id' => $userId]);
		$userEntity = $this->userService->newEntity($userRow);
		$userEntity->account($userEntity->account() + ($cost * $count));
		$this->userService->putUser($userEntity, ['role' => 'manager']);
		$id = $this->transactionService->postTransaction($transactionEntity, [ 'id' => $userId ]);
		return $this->transactionService->newEntity(['id' => $id] + $transactionEntity->assign());
	}

	public function postProductGiveOne($userId, $productId, $addCount) {
		$addCount = $addCount ?: 1;
		$productRow = $this->productService->getProduct(['id' => $productId]);
		$productEntity = $this->productService->newEntity($productRow);
		$count = $productEntity->count();
		$productEntity->count($count + $addCount);
		$this->productService->transaction();
		$this->productService->putProduct($productEntity, ['id' => $userId]);
		$transactionEntity = $this->addTransaction($productId, $addCount, $productEntity->price(), $userId);
		$this->productService->commit();
		return [ $transactionEntity->getId() => $transactionEntity->assign() ];
	}

	public function postProductTakeOne($userId, $productId, $subCount = 1) {
		$subCount = $subCount ?: 1;
		$productRow = $this->productService->getProduct(['id' => $productId]);
		$productEntity = $this->productService->newEntity($productRow);
		$count = $productEntity->count();
		if ($count <= 0) {
			return null;
		}
		$productEntity->count($count - $subCount);
		$this->productService->transaction();
		$this->productService->putProduct($productEntity, ['id' => $userId]);
		$transactionEntity = $this->addTransaction($productId, $subCount*-1, $productEntity->price(), $userId);
		$this->productService->commit();
		return [ $transactionEntity->getId() => $transactionEntity->assign() ];
	}

	public function postProductReceiveBox($userId, $products) {
		$transactionArr = [];
		$this->productService->transaction();
		foreach ($products as $product) {
			$result = $this->postProductGiveOne($userId, $product['id'], $product['count']);
			$transactionArr = array_merge($transactionArr, $result);
		}
		$transactionAssoc = [];
		foreach ($transactionArr as $transaction) {
			if (!array_key_exists($transaction['product_id'], $transactionAssoc)) {
				$transactionAssoc[$transaction['product_id']] = $transaction;
				$transactionAssoc[$transaction['product_id']]['count'] = 0;
			}
			$transactionAssoc[$transaction['product_id']]['count'] += $transaction['count'];
		}
		$this->productService->commit();
		return $transactionArr;
	}

	public function postProductSellBox($userId, $products) {
		$transactionArr = [];
		$this->productService->transaction();
		foreach ($products as $product) {
			$result = $this->postProductTakeOne($userId, $product['id'], $product['count']);
			if ($result) {
				$this->productService->rollback();
				return null;
			}
			$transactionArr = array_merge($transactionArr, $result);
		}
		$transactionAssoc = [];
		foreach ($transactionArr as $transaction) {
			if (!array_key_exists($transaction['product_id'], $transactionAssoc)) {
				$transactionAssoc[$transaction['product_id']] = $transaction;
				$transactionAssoc[$transaction['product_id']]['count'] = 0;
			}
			$transactionAssoc[$transaction['product_id']]['count'] += $transaction['count'];
		}
		$this->productService->commit();
		return $transactionArr;
	}

	public function putUserAccount($userId, $paid) {
		$userRow = $this->userService->getUser(['id' => $userId]);
		$userEntity = $this->userService->newEntity($userRow);
		$userEntity->account($userEntity->account() + $paid);
		return $this->userService->putUser($userEntity, ['role' => 'manager']);
	}

}