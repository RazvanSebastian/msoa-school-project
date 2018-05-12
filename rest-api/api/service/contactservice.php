<?php 
include_once '../configuration/database.php';
include_once '../entity/contact.php';
class ContactService
{
	private $db;

	function __construct()
	{
		$this->db = new Database();
	}

	public function save($c)
	{
		$connection = $this->db->getConnection();
		$sql = "INSERT INTO contact(name,email,comment) 
		VALUES ('$c->name','$c->email','$c->comment')";
		
		if ($connection->query($sql) === TRUE) {
			echo "New contact created successfully";

		} else {
			echo "Error: " . $sql . "<br>" . $connection->error;
		}
		$connection->close();
	}
}
?>