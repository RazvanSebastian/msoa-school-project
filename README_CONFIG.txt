1. InstallMySql Workbench and let the default username and password (user:root and password:root)
1.1 Generate a db with msoadb name
1.2 Create two tables:
product
	id : PK
	name : text
	description : text
	price : double
	created : Date
	imageURI : text

contact
	idcontact : PK
	email : text
	name : text
	comment : text


2. Install XAMPP
2.1 Start Apache server
2.3 Copy the api folder into XMPP/htdocs

Note : the api server will respond at http://localhost/api o see api index

3. Install node.js 
4. Install globally angular-li : check this https://cli.angular.io/
5. With "npm install" cmd command, download node_module to configure the angular project
6. With "ng serve -o" cmd command, build and start the angular project. 