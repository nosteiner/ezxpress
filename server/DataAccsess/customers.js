var Sequelize = require('sequelize');
var DA = require('./dataAccess');



class Customer {
    constructor() {
        this.model = this.initCustomer();

    }
    initCustomer() {
        let customer = DA.connection.define('customers', {
            customerId: { type: Sequelize.INTEGER, 
                          primaryKey: true,
                          autoIncrement: true },
            
            email: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            address: Sequelize.STRING,
            active : Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

        return customer;
    }
    getAll() {
        return this.model.findAll();
    }

    getOneById(user) {
        return this.model.findAll({
            where: {
                customerId: user.customerId
            }
        });   
    }       
    create(data){
        return this.model.create(data)
    }
    update(newData,id){
        return this.model.update(newData,{where:{customerId: id}});
    }
    delete(id){
        return this.model.destroy({ where:{customerId: id}
          });
    }
}
const customer = new Customer();

module.exports = customer;