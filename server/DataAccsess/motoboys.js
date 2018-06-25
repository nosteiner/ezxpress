var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class MotoBoy {
    constructor() {
        this.model = this.initMotoBoy();
    }
    initMotoBoy() {
        let Motoboy = DA.connection.define('motoboys', {
            motoboyId: { type: Sequelize.INTEGER, primaryKey: true },
            idNumber: Sequelize.STRING,
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            email: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            rate: Sequelize.INTEGER,
            photo: Sequelize.STRING,
            latitude: Sequelize.FLOAT,
            longitude: Sequelize.FLOAT
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });

           //customer.belongsTo(Company.model, { foreignKey: 'company_id' });
           // Company.model.hasMany(customer, { foreignKey: 'company_id' });

        return Motoboy;
    }
    getAll() {
        return this.model.findAll();
    }
    
    getOneById(ID) {
        console.log(ID)
        return this.model.findAll({
            where: {
                motoboyId: ID
            }
        });
    }
    create(data){
        return this.model.create(data);
    }
    update(newData,id){
        return this.model.update(newData,{where:{motoboyId: id}});
    }
    delete(id){
        return this.model.destroy({ where:{motoboyId: id}
          });
    }
}
const motoboy = new MotoBoy();

module.exports = motoboy;