var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class MotoBoy {
    constructor() {
        this.model = this.initMotoBoy();
    }
    initMotoBoy() {
        let motoboy = DA.connection.define('motoboys', {
            motoboyId: { type: Sequelize.INTEGER, autoIncrement: true,primaryKey: true },
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            email: Sequelize.STRING,
            phoneNumber: Sequelize.STRING,
            rate: Sequelize.INTEGER,
            
            latitude: Sequelize.FLOAT,
            longitude: Sequelize.FLOAT,
            active : Sequelize.BOOLEAN,
            position : Sequelize.GEOMETRY
        }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        return motoboy;
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

    getClosesMoto(lat, lng) {
     var attributes = Object.keys(this.model.attributes);
     var location = Sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
     var distance = Sequelize.fn('ST_Distance', Sequelize.literal('position'), location);
     attributes.push([distance,'distance']);
 
      return this.model.findAll({  
       attributes: attributes,
       order: distance,
       where: Sequelize.where(distance, {$lte: 1000}),
       logging: console.log
     })
    }
}
const motoboy = new MotoBoy();

module.exports = motoboy;