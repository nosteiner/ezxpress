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
            userId:  { type: Sequelize.INTEGER, primaryKey: true },
            userName: Sequelize.STRING,
            password: Sequelize.STRING,
            customerId: { type: Sequelize.INTEGER, references: { model: customers, key: 'customerId' }},
            motoboyId: { type: Sequelize.INTEGER, references: { model: motoboys, key: 'motoboyId' }},
            rate: Sequelize.INTEGER,
            active : Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
            user.hasOne(customers.model, { foreignKey: 'customerId' });
            user.hasOne(motoboys.model, { foreignKey: 'motoboyId' });
           

        return user;
    }
    getAll(){
        return this.model.findAll({
            include: 
               { model : motoboys.model }
          });
    }
    create(data){
        return this.model.create(data);
    }
    update(newData,id){
        return this.model.update(newData,{where:{userId: id}});
    }
    delete(id){
        return this.model.destroy({ where:{userId: id}
          });
    }
}
const user = new User();

module.exports = user;