const { Employee } = require("../../models/index.js");


const EmployeeResolvers = {
    Query: {
        getAllEmployees: async () => {
            return await Employee.find({});
        },
        getEmployeeById: async (parent, args) => {
            return await Employee.findById(args._id);
        },
        searchEmployees: async (_, { designation, department }) => {
            try {
                const filter = {};
                if (designation) filter.designation = designation;
                if (department) filter.department = department;

                const employees = await Employee.find(filter);
                if (employees.length === 0) throw new Error("No employees found");
                return employees;
            } catch (error) {
                console.error("Error searching employees:", error);
                throw new Error("Error searching employees.");
            }
        }
    },
    Mutation: {
        async addEmployee(_, { employee }) {
            if (!employee) return new Error("No employee data");
        
            try {
                const newEmployee = new Employee({
                    firstname: employee.firstname,  // Ensure correct field name
                    lastname: employee.lastname,    // Ensure correct field name
                    email: employee.email,
                    gender: employee.gender,
                    city: employee.city,
                    designation: employee.designation,
                    salary: employee.salary,
                });
        
                await newEmployee.save();
        
                return {
                    _id: newEmployee._id,
                    firstname: newEmployee.firstname,  // Correct field name
                    lastname: newEmployee.lastname,    // Correct field name
                    email: newEmployee.email,
                    gender: newEmployee.gender,
                    city: newEmployee.city,
                    designation: newEmployee.designation,
                    salary: newEmployee.salary,
                };
        
            } catch (ex) {
                return ex;
            }
        }
        ,
        async updateEmployee(_, { _id, employee }) {
            if (!_id || !employee) return new Error("No employee data");
        
            const empExist = await Employee.findById(_id);
            if (!empExist) return new Error("Employee not found");
        
            try {
                await Employee.findByIdAndUpdate(_id, {
                    firstname: employee.firstname,  // Ensure correct field name
                    lastname: employee.lastname,    // Ensure correct field name
                    email: employee.email,
                    gender: employee.gender,
                    city: employee.city,
                    designation: employee.designation,
                    salary: employee.salary,
                });
        
                return await Employee.findById(_id);
            }
            catch (ex) {
                return ex;
            }
        }
        ,
        async deleteEmployee(_, { _id }) {
            if (!_id) throw new Error("No employee data");
        
            const empExist = await Employee.findById(_id);
            if (!empExist) throw new Error("Employee not found");
        
            try {
                const deletedEmp = await Employee.findByIdAndDelete(_id);
                return !!deletedEmp; 
            } catch (ex) {
                console.error("Error deleting employee:", ex);
                return false;
            }
        },        
    },
};

module.exports = EmployeeResolvers;