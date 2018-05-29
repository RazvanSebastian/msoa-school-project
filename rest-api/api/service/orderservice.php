<?php 
include_once '../configuration/database.php';
include_once '../entity/order.php';

class OrderService
{
	private $db;

	function __construct()
	{
		$this->db = new Database();
	}

	public function findAll($id)
	{		
		$connection = $this->db->getConnection();

		$sql = "SELECT *
		FROM `order`
		where user_id=$id";
		$result = $connection->query($sql);
		$rows = array();
		echo $connection->error;

		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$order = new Order();
				$order->id = $row["id"];
				$order->products = unserialize($row["products"]);
				$order->price = $row["price"];
				array_push($rows,$order);
			}

			$connection->close();
			return json_encode($rows);
		}
		else {
			$connection->close();
			return json_encode($rows);
		}
	}
}
?>		
