require('dotenv').config();

const express = require('express')
const cors = require('cors')
const route = require('./src/routes/routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/express2', route.express2)

// console.log(process.env)

app.listen(process.env.PORT, ()=> {
    console.log('running on' + process.env.PORT)
} ) 