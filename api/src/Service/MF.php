<?php // Julie automatic generated file
namespace App\Service;

class MF {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance =  new self();
		}
		return self::$instance;
	}

	public function userAuthService() {
		return UserAuthService::create();
	}
	
	public function productHelperService() {
		return ProductHelperService::create();
	}
	
	public function productService() {
		return ProductService::create();
	}
	
	public function userService() {
		return UserService::create();
	}
	
	public function transactionService() {
		return TransactionService::create();
	}
	


}
