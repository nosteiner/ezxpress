var Sequelize = require('sequelize');
 
class DataAccess  {
   constructor() {
      //  this.connection = new Sequelize('bks7zwldc', 'uade6jmorebbqfkx', '4BrVbJA04PfPvRnYd5b', {
      //    host: 'bks7zwldc-mysql.services.clever-cloud.com',
      //    dialect: 'mysql',

       this.connection = new Sequelize('sql12245391', 'sql12245391', 'dzUyt7gYAw', {
         host: 'sql12.freemysqlhosting.net',
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