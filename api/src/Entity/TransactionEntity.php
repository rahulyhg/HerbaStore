<?php // Julie automatic generated file
namespace App\Entity;


class TransactionEntity extends BaseEntity {

	const table = "transaction";

	public function __construct($attributes) {
		$this->hydrate([
			
			

		]);
		parent::__construct($attributes);
	}

	public function product_id($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_id, false);
	}

	public function count($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_int, false);
	}

	public function cost($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_float, false);
	}

	public function user_id($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_id, false);
	}

}