const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routesUrl = require('./routes/routes');


const app = express();
const port= process.env.PORT || 3001;

dotenv.config()

// mongoose connection
mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log('database connected'))

// middlewares
app.use(express.json())
app.use(cors())
app.use('/api', routesUrl)

// api endpoint
app.get('/', (req, res)=> res.send('Hello there!'))


// server listen 
app.listen(port, () => console.log(`server is up and running on localhost ${port}`))