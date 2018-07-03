var Sequelize = require('sequelize');
var DA = require('./dataAccess');
var Customer = require('./customers');
var Motoboy = require('./motoboys');
var Status = require('./status');
const Op = Sequelize.Op;


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

            customerId: { type: Sequelize.INTEGER, references: { model: Customer, key: 'customerId' } },
            motoboyId: { type: Sequelize.INTEGER, references: { model: Motoboy, key: 'motoboyId' } },
            localAddress: Sequelize.STRING,
            latitudeOriginAddress: Sequelize.FLOAT,
            longitudeOriginAddress: Sequelize.FLOAT,
            latitudeDestAddress: Sequelize.FLOAT,
            longitudeDestAddress: Sequelize.FLOAT,
            destAddress: Sequelize.STRING,

            price: Sequelize.INTEGER,
            orderDate: Sequelize.DATE,
            collectDate: Sequelize.DATE,
            deliveryDate: Sequelize.DATE,
            contactDestination: Sequelize.STRING,
            phoneDestination: Sequelize.STRING,
            description: Sequelize.STRING,
            deliveryType: Sequelize.STRING,

            statusId: { type: Sequelize.INTEGER, references: { model: Status, key: 'statusId' } },
            active: Sequelize.BOOLEAN
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

        order.belongsTo(Customer.model, { foreignKey: 'customerId' });
        Customer.model.hasMany(order, { foreignKey: 'orderId' })
        order.belongsTo(Motoboy.model, { foreignKey: 'motoboyId' });
        Motoboy.model.hasMany(order, { foreignKey: 'orderId' })
        order.belongsTo(Status.model, { foreignKey: 'statusId' });
        Status.model.hasMany(order, { foreignKey: 'statusId' })

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


    getOrders(user) {
        if (user.customerId) {
            return this.model.findAll({ include: [Customer.model, Motoboy.model, Status.model], where: { customerId: user.customerId } });
        }
        if (user.motoboyId) {
            return this.model.findAll({ 
                include: [Customer.model, Motoboy.model, Status.model],
                where: { [Op.or]: [{ statusId: 1 }, { [Op.and]: [{ [Op.not]: { statusId: 5 } }, { motoboyId: user.motoboyId }] }] },
                order: Sequelize.fn('max', Sequelize.col('status.statusId'))
            });
        }
    }

    getAll() {
        return this.model.findAll({ include: [Customer.model, Motoboy.model, Status.model] });
    }

    create(data) {
        console.log('entei new order')
        console.log(data)
        return this.model.create(data);
    }
    update(newdata, id) {
        return this.model.update(newdata, { where: { orderId: id } });
    }
    delete(id) {
        return this.model.destroy({
            where: { orderId: id }
        });
    }
}
const order = new Order();

module.exports = order;