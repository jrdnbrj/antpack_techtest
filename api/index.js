require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');


const app = express()
const port = process.env.PORT || 8000

app.use(express.json()) 

// Enable CORS from all origins
// This is very insecure but for practical purposes it works
app.use(cors({ origin: '*' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`))

async function dbConnection() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to DB.')
}

dbConnection()
  .then(console.log)
  .catch(console.error)
  