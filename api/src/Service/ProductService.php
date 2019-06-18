<?php // Julie automatic generated file
namespace App\Service;

use App\Entity\ProductEntity;
use App\Resource\DbResource;

class ProductService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function newEntity($attributes) {
		return new ProductEntity((array) $attributes);
	}

	public function getAllProduct(array $attrs = []) {
		return $this->db->select('*')->from('product')->where($attrs)->fetchAssoc('id');
	}

	public function getProduct(array $attrs = []) {
		return $this->db->select('*')->from('product')->where($attrs)->fetch();
	}

	public function postProduct(ProductEntity $productEntity, array $user) {
		if (array_key_exists('id', $user)) {
			$productEntity->user_id($user['id']);
		}
		$this->db->insert('product', $productEntity->assign())->execute();
		return $this->db->getInsertId();
	}

	public function putProduct(ProductEntity $productEntity, array $user) {
		$query = $this->db->update('product', $productEntity->assign())->where(['id' => $productEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteProduct(ProductEntity $productEntity, array $user) {
		$query = $this->db->delete('product')->where(['id' => $productEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteProductBy(array $attrs, array $user) {
		$query = $this->db->delete('product')->where($attrs);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

}