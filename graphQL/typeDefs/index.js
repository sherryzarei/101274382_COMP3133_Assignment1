const { mergeTypeDefs } = require('@graphql-tools/merge');
const userTypeDefs = require('./userTypeDefs.js');
const employeeTypeDefs = require('./employeeTypeDefs.js');

const typeDefs = mergeTypeDefs([userTypeDefs, employeeTypeDefs]);

module.exports = typeDefs;
