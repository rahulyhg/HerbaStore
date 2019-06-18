<?php

namespace App\Resource;

class Config {

	public static function isProd() {
		return false;
	}

	public static function dbConnection() {
		return self::isProd() ? [

		] : [
			'driver' => 'mysqli',
			'host' => 'localhost:8900',
			'database' => 'herbastore',
			'username' => 'root',
			'password' => 'herbastore'
		];
	}

}