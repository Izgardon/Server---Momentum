const express = require('express');
const dotenv = require('dotenv');
// const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db')



//load env variables
dotenv.config({path: './config/config.env'});



// connect to db
connectDB()





const app = express();


//body parser
app.use(express.json())



// dev loggin middleware


// mount routers




const PORT = process.env.PORT || 5050

const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)); 

// handle unhandled promise rejection
process.on('unhandled rejections', (err, promise) => {
    console.log(`unhandled rejection: ${err.message}`.red)
    //close server and exit process
    server.close(() => process.exit(1))
})