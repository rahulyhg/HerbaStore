<?php // Julie automatic generated file
namespace App\Entity;


class ProductEntity extends BaseEntity {

	const table = "product";

	public function __construct($attributes) {
		$this->hydrate([
			
			
			
			

		]);
		parent::__construct($attributes);
	}

	public function number($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function name($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function price($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_int, false);
	}

	public function count($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_int, false);
	}

	public function user_id($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_id, false);
	}

}