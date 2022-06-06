const fs = require('fs')
const monggoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')


// load env var
dotenv.config({path: './config/config.env'})

// load models
const Habit = require('./models/habits')
const { default: mongoose } = require('mongoose')




