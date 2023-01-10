const database = require("./database");
const fakeDatabase = require("../__tests__/fakedb");

const isProduction = process.env["NODE_ENV"] === "development";

const getDatabaseService = () => {
  return isProduction ? database : fakeDatabase;
};

module.exports = getDatabaseService;
