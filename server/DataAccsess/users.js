var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var customers = require('./customers');
var motoboys = require('./motoboys');

class User {
    constructor() {
        this.model = this.initCustomer();
    }
    initCustomer() {
        let user = DA.connection.define('users', {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            userName: Sequelize.STRING,
            password: Sequelize.STRING,
            customerId: { type: Sequelize.INTEGER, references: { model: customers, key: 'customerId' }},
            motoboyId: { type: Sequelize.INTEGER, references: { model: motoboys, key: 'motoboyId' }},
           
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
           // user.hasOne(customers.model, { foreignKey: 'customerId' , onUpdate: 'CASCADE', hooks: true})
           // user.hasOne(motoboys.model, { foreignKey: 'motoboyId', onUpdate: 'CASCADE', hooks: true})

           
        return user;
    }

    // getOneUser(username, password) {
    //     return this.model.findOne({
    //       where: {
    //         userName: username,
    //         password: password
    //       }
    //     });
    // }

    getAll(){
        return this.model.findAll({
            include: [
               { model : motoboys.model },
               { model : customer.model }
            ]
          });
    }

    getOneUser(userName, password) {
        return this.model.findOne({
          where: {
            userName: userName,
            password: password
          }
        }).then((data) => {
          return data
        }, err => {
          console.error(err)
        })
    }

    getUserType(id) {
        return this.model.findOne({
          where: {
            id: id
          }
        }).then((data) => {
          return data
        }, err => {
          console.error(err)
        })
    }

    create(data){
        console.log("update users !!! ")
        console.log(data)
        return this.model.create(data);
    }

    update(newData,id){
        return this.model.update(newData,{where:{commentId: id}});
    }

    delete(id){
        return this.model.destroy({ where:{commentId: id}
          });
    }
}
const users = new User();

module.exports = users;