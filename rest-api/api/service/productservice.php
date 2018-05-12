<?php 
include_once '../configuration/database.php';
include_once '../entity/product.php';
class ProductService
{
	private $db;

	function __construct()
	{
		$this->db = new Database();
	}

	public function update($p)
	{
		$connection = $this->db->getConnection();
		$sql = "UPDATE product 
		SET	name='$p->name',description='$p->description',price='$p->price',created='$p->created',imageURI='$p->imageURI' 
		WHERE id='$p->id'";

		if ($connection->query($sql) === TRUE) {
			echo "Record update successfully";
		} else {
			echo "Error update record: " . $connection->error;
		}

		$connection->close();
	}

	public function delete($id)
	{
		$connection = $this->db->getConnection();
		$sql = "DELETE FROM product WHERE id='$id'";

		if ($connection->query($sql) === TRUE) {
			echo "Record deleted successfully";
		} else {
			echo "Error deleting record: " . $connection->error;
		}

		$connection->close();
	}

	public function save($p)
	{
		$connection = $this->db->getConnection();
		$sql = "INSERT INTO product(name,description,price,created,imageURI) 
		VALUES ('$p->name','$p->description','$p->price','$p->created','$p->imageURI')";
		
		if ($connection->query($sql) === TRUE) {
			echo "New record created successfully";

		} else {
			echo "Error: " . $sql . "<br>" . $connection->error;
		}
		$connection->close();
	}

	public function findAll()
	{
		$connection = $this->db->getConnection();

		$sql = "SELECT * FROM product ORDER BY created";
		$result = $connection->query($sql);
		$rows = array();

		if ($result->num_rows > 0) {
			while($row = $result->fetch_assoc()) {
				$product = new Product();
				$product->id = $row["id"];
				$product->name = $row["name"];
				$product->description = $row["description"];
				$product->price = $row["price"];
				$product->created = $row["created"];
				$product->imageURI = $row["imageURI"];
				array_push($rows,$product);
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