const {
    Sequelize,
    DataTypes
} = require('sequelize');
const sequelize = require('../persistence/persistence');

const Operation = sequelize.define('operation', {
    concept: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('egreso', 'ingreso'),
        allowNull: false
    },
    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, {});

module.exports = Operation