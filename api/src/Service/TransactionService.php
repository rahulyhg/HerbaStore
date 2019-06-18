<?php // Julie automatic generated file
namespace App\Service;

use App\Entity\TransactionEntity;
use App\Resource\DbResource;

class TransactionService extends BaseService {

	public static $instance = null;

	public static function create() {
		if (!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function newEntity($attributes) {
		return new TransactionEntity((array) $attributes);
	}

	public function getAllTransaction(array $attrs = []) {
		return $this->db->select('*')->from('transaction')->where($attrs)->fetchAssoc('id');
	}

	public function getTransaction(array $attrs = []) {
		return $this->db->select('*')->from('transaction')->where($attrs)->fetch();
	}

	public function postTransaction(TransactionEntity $transactionEntity, array $user) {
		if (array_key_exists('id', $user)) {
			$transactionEntity->user_id($user['id']);
		}
		$this->db->insert('transaction', $transactionEntity->assign())->execute();
		return $this->db->getInsertId();
	}

	public function putTransaction(TransactionEntity $transactionEntity, array $user) {
		$query = $this->db->update('transaction', $transactionEntity->assign())->where(['id' => $transactionEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteTransaction(TransactionEntity $transactionEntity, array $user) {
		$query = $this->db->delete('transaction')->where(['id' => $transactionEntity->getId()]);
		switch ($user['role']) {
			case 'owner':
				$query = $query->where('user_id = %i', $user['id']);
				break;

			case 'manager':
				break;
		}
		$query->execute();
	}

	public function deleteTransactionBy(array $attrs, array $user) {
		$query = $this->db->delete('transaction')->where($attrs);
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