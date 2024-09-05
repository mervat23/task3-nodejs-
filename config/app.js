const express=require("express")
const app=express()
const cors=require("cors")
require("dotenv").config();
// const sessionAuth=require("../helpers/session.auth")
const indexRoutes=require("../Routes/index.routes")


// const cors=require("../helpers/cors")
const{handleCorsPolicy}=require("../helpers/cors")
const connection=require('./database').connection
connection()


app.use(cors())
app.use(handleCorsPolicy)
// app.use(sessionAuth)
app.use(express.json())
app.use(indexRoutes)

module.exports=app