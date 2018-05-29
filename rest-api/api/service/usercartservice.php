<?php 
include_once '../configuration/database.php';

class UserCartService
{
	private $db;

	function __construct()
	{
		$this->db = new Database();
	}
	
	public function saveOrder($products,$price,$userid)
	{
		$connection = $this->db->getConnection();

		$array_string=mysqli_escape_string($connection,serialize($products));
		$sql = "INSERT INTO `msoadb`.`order`
		(`products`,
		`price`,
		`user_id`)
		VALUES
		('$array_string',
		$price,
		$userid
	)";
	if ($connection->query($sql) === TRUE) {
		echo "saved";
	}
	else{
		echo "Error: " . $sql . "<br>" . $connection->error;
	}

	$connection->close();
}
}
?>		
