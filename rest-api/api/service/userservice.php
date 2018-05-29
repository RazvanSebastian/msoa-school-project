<?php 
/**
 * 
 */
class UserService 
{
	
	private $db;

	function __construct()
	{
		$this->db = new Database();
	}

	public function saveUser($user)
	{
		$connection = $this->db->getConnection();
		$sql = "INSERT INTO user(email,firstname,lastname,address,phone) 
		VALUES ('$user->email','$user->firstname','$user->lastname','$user->address','$user->phone')";
		$id = 0;

		if ($connection->query($sql) === TRUE) {
			$id = $connection->insert_id;			
		} else {
			$id = $this->findUser($user->email);
		}
		$connection->close();
		return $id;
	}

	public function findUser($email){
		$connection = $this->db->getConnection();

		$sql = "SELECT * FROM user WHERE email='$email'";
		$result = mysqli_query($connection,$sql);
		$user = mysqli_fetch_object($result);
		$connection->close();
		return $user->id;
	}
}
?>