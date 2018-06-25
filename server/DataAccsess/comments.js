var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var customers = require('./customers');
var motoboys = require('./motoboys');
var orders = require('./orders');


class Comment {
    constructor() {
        this.model = this.initCustomer();
    }
    initCustomer() {
        let comment = DA.connection.define('comments', {
            commentId: { type: Sequelize.INTEGER, primaryKey: true },
            comment: Sequelize.STRING,
            customerId: { type: Sequelize.INTEGER, references: { model: customers, key: 'customerId' }},
            motoboyId: { type: Sequelize.INTEGER, references: { model: motoboys, key: 'motoboyId' }},
            orderId: { type: Sequelize.INTEGER, references: { model: orders, key: 'orders' }},
            rate: Sequelize.INTEGER,
            active : Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

           comment.belongsTo(orders.model, { foreignKey: 'orderId' });
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return comment;
    }
    getAll() {
        return this.model.findAll();
    }
    create(data){
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
const comment = new Comment();

module.exports = comment;