const Sequelize= require('sequelize')

const sequelize= new Sequelize ('expense-app','root', 'Vaibhavlal123', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize