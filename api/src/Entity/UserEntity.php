<?php // Julie automatic generated file
namespace App\Entity;


class UserEntity extends BaseEntity {

	const table = "user";

	public function __construct($attributes) {
		$this->hydrate([
			
			
			
			

		]);
		parent::__construct($attributes);
	}

	public function email($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function password($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function role($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_string, false);
	}

	public function account($value = false) {
		return $this->getOrSet(__FUNCTION__, $value, self::type_float, false);
	}

}