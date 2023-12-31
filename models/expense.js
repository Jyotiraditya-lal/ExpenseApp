const Sequelize= require('sequelize')
const sequelize= require('../util/database')

const Expense= sequelize.define('Expenses',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports= Expense