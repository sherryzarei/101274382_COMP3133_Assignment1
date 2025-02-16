// employeeTypeDefs.js - GraphQL schema for Employee
const { gql } = require("apollo-server-express");

const employeeTypeDefs = gql`

enum Gender { 
    male,
    female,
    non_binary
    prefer_not_to_mention
}

type Employee {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    gender: Gender!
    city: String!         
    designation: String!        
    salary: Float!
}

input EmployeeInput {
    firstname: String!
    lastname: String!
    email: String!
    gender: Gender!
    city: String!         
    designation: String!  
    salary: Float!
}


type Query {
    getAllEmployees: [Employee]
    getEmployeeById(_id: String!): Employee
    searchEmployees(designation: String, department: String): [Employee]
}

type Mutation {
    addEmployee(employee: EmployeeInput!): Employee
    updateEmployee(_id: String!, employee: EmployeeInput!): Employee
    deleteEmployee(_id: String!): Boolean
}

`;

module.exports = employeeTypeDefs;
