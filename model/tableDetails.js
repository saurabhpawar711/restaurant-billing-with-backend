const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Table = sequelize.define('table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dish: {
        type: Sequelize.STRING,
        allowNull: false
    },
    table: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Table;