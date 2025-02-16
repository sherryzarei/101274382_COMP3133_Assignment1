# 101274382_COMP3133_Assignment1
This project is a GraphQL Employee Management System, designed to manage employee records efficiently using GraphQL, Node.js, Express, and MongoDB. It provides CRUD operations for employees, allowing users to create, read, update, and delete employee records through GraphQL queries and mutations.

## 🔧 Installation & Setup

## 1️⃣ Clone the Repository

`git clone https://github.com/sherryzarei/101274382_COMP3133_Assignment1.git`
`cd 101274382_COMP3133_Assignment1`

## 2️⃣ Install Dependencies

`npm install`

## 3️⃣ Configure Environment Variables

Create a .env file in the root directory and add your MongoDB connection string:

`MONGO_URI=mongodb+srv://your_user:your_password@cluster.mongodb.net/database_name`
`PORT=4000`

## 4️⃣ Start the Server

`npm run dev`

The server should start on http://localhost:4000/graphql.

Import the Postman Collection

Open Postman.

Click Import > Select COMP3133-A1.postman_collection.json.

Use the predefined queries/mutations to interact with the API.



## Employee Management API Screenshots
### Login
![Login](images/Login.png)

### Register
![Register](images/Register.png)

### Add Employee
![Add Employee](images/Add-Employee.png)

### Update Employee
![Update Employee](images/Update-Employee.png)

### Delete Employee
![Delete Employee](images/Delete-Employee.png)

### Get All Employees
![Get All Employees](images/Get-All-Employees.png)

### Get Employee by Designation
![Get Employee by Designation](images/Get-Employee-by-Designation.png)

### Get Employee by ID
![Get Employee by ID](images/Get-Employee-by-Id.png)


## MongoDB Console Screenshots:
### Users
![Users](images/MongoDB-users.png)

### Employees
![Employees](images/MongoDB-employees.png)

## Postman Collection JSON Content

### Below is the content of COMP3133-A1.postman_collection.json:

```json
{
	"info": {
		"_postman_id": "ed975732-bfd1-48c5-80d6-7d8084907c52",
		"name": "COMP3133-A1",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "38227836"
	},
	"item": [
		{
			"name": "Signup",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Add Employee",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get All Employees",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Update Employee",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Delete Employee",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Employee by ID",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "Get Employee by Designation",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		}
	]
}

