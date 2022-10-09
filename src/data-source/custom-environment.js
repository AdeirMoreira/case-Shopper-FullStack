const NodeEnvironment = require('jest-environment-node').TestEnvironment;
const { execSync, exec } = require("child_process");
const { resolve } = require("path");

require("dotenv").config({
    path: resolve(__dirname, "..", "..",".env.test"),
  });

console.log(process.env.DB_HOST)

class CustomEnvironment extends NodeEnvironment {
    constructor(config){
        super(config)
        this.DB_HOST_TEST = process.env.DB_HOST
        this.DB_PORT_TEST = process.env.DB_PORT
        this.PORT_TEST = process.env.PORT
    }

    setup(){
        process.env.DB_HOST = this.DB_HOST_TEST
        this.global.process.env.DB_HOST = this.DB_HOST_TEST

        process.env.DB_PORT = this.DB_PORT_TEST
        this.global.process.env.DB_PORT = this.DB_PORT_TEST

        process.env.PORT = this.PORT_TEST
        this.global.process.env.PORT = this.PORT_TEST

        execSync(` 
        npm rum migration:run && 
        npm run unpopulate &&
        npm run populate
        `)
    }
}

module.exports = CustomEnvironment;