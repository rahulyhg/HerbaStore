<?php

namespace App\Service;

use \App\Entity\UserEntity;
use \App\Resource\UserAuthResource;

class UserAuthService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance =  new self();
		}
		return self::$instance;
	}

	public function __construct() {
		$this->userService = UserService::create();
		$this->userAuthResource = UserAuthResource::create();
		$this->productService = ProductService::create();
		$this->transactionService = TransactionService::create();
	}

	public function getAuthToken(UserEntity $userEntity) {
		return $this->userAuthResource->getAuthToken($userEntity);
	}

	public function postLogin($username, $password) {
		$userRow = $this->userService->getUser(['email' => $username ]);
		if (!$userRow) {
			return null;
		}
		$userEntity = $this->userService->newEntity($userRow);
		if (!password_verify($password, $userEntity->password())) {
			return null;
		}
		return [
			'authToken' => $this->getAuthToken($userEntity),
			'user' => [
				'id' => $userEntity->getId(), 
				'role' => $userEntity->role(), 
				'email' => $userEntity->email(), 
				'account' => $userEntity->account() 
			],
			'products' => $this->productService->getAllProduct(),
			'transactions' => $this->transactionService->getAllTransaction()
		];
	}

}