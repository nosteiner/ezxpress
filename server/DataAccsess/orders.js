var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var Customer = require('./customers');
var Motoboy = require('./motoboys');



class Order {
    constructor() {
        this.model = this.initCustomer();

    }
    initCustomer() {
        let order = DA.connection.define('orders', {
            orderId: { type: Sequelize.INTEGER, primaryKey: true },
            customerId: { type: Sequelize.INTEGER, references: { model: Customer, key: 'customerId' } },
            motoboyId: { type: Sequelize.INTEGER, references: { model: Motoboy, key: 'motoboyId' } },
            localAddress: Sequelize.STRING,
            latitudeOriginAddress: Sequelize.FLOAT,
            longitudeOriginAddress: Sequelize.FLOAT,
            latitudeDestAddress: Sequelize.FLOAT,
            longitudeDestAddress: Sequelize.FLOAT,
            price: Sequelize.INTEGER,
            orderDate: Sequelize.DATE,
            collectDate: Sequelize.DATE,
            deliveryDate: Sequelize.DATE,
            contactDestination: Sequelize.STRING,
            phoneDestination: Sequelize.STRING,
            description: Sequelize.STRING,
            deliveryType: Sequelize.STRING,
            statusId: Sequelize.STRING,
            active: Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

        order.belongsTo(Customer.model, { foreignKey: 'customerId' });
        Customer.model.hasMany(order, { foreignKey: 'orderId' })
        order.belongsTo(Motoboy.model, { foreignKey: 'motoboyId' });
        Motoboy.model.hasMany(order, { foreignKey: 'orderId' })

        return order;
    }
    
    // getOrders(user) {
    //     if (user.customerId != null) {
    //         return this.model.findAll({ include: [Customer.model, Motoboy.model], where: { statusId: 1 } });
    //     }else if (user.motoboyId != null) {
    //         return this.model.findAll({ include: [Customer.model, Motoboy.model], where: { customerId: user.customerId } });
    //     }else{
    //         return this.model.findAll({ include: [Customer.model, Motoboy.model]})
    //     } 
    // }

    getAll() {
        return this.model.findAll({ include: [Customer.model, Motoboy.model] });
    }

    create(data) {
        console.log('entei new order')
        console.log(data)
        return this.model.create(data);
    }
    update(newData, id) {
        return this.model.update(newData, { where: { orderId: id } });
    }
    delete(id) {
        return this.model.destroy({
            where: { orderId: id }
        });
    }
}
const order = new Order();

module.exports = order;