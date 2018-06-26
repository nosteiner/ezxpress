var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class Customer {
    constructor() {
        this.model = this.initCustomer();
    }
    initCustomer() {
        let customer = DA.connection.define('customers', {
            customerId: { type: Sequelize.INTEGER, primaryKey: true },
            email: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            address: Sequelize.STRING,
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

           //customer.belongsTo(Company.model, { foreignKey: 'company_id' });
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return customer;
    }
    getAll() {
        return this.model.findAll();
    }
    create(data){
        return this.model.create(data);
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