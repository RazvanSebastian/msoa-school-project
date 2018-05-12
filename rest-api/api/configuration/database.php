<?php
/**
* 
*/
class Database 
{
	public $conn;

	private $servername = "localhost";
	private $username = "root";
	private $password = "root";
	private $dbname = "msoadb";

	function __construct()
	{
	}
	
	public function getConnection()
	{
		$conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);

		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		return $conn;
	}
}

?>