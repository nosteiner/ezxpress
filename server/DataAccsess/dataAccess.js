
var Sequelize = require('sequelize');

class DataAccess  {

  constructor() {
      this.connection = new Sequelize('ezxpress', 'root', '1234', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
        define: {
          timestamps: false
        }
      });    
     
  }
}
const DA = new DataAccess() ;
module.exports =   DA;


//password
//gKA6erG2f53$RV1g