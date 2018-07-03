var Sequelize = require('sequelize');
var DA = require('./dataAccess');

class Status {
    constructor() {
        this.model = this.initStatus();
        
    }
    initStatus() {
        let status = DA.connection.define('status', {
            statusId: { type: Sequelize.INTEGER, primaryKey: true },
            name: { type: Sequelize.STRING}
            }, {
                freezeTableName: true // Model tableName will be the same as the model name
            });
        return status;
    }


    getAll() {
        return this.model.findAll();
    }
    
}
const status = new Status();

module.exports = status;