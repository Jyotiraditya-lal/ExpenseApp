const express= require('express')
const bodyParser=require('body-parser')
const expenses= require('./routes/expenseRoutes')
const path=require('path')
const sequelize = require('./util/database')

const app= express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(expenses)

app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err)
})