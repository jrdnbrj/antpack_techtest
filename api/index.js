require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = 8000

const { allUsers, newUser, usersFromApi } = require('./src/userResolver')


app.use(express.json()) 

const cors = require('cors')
app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  const users = await allUsers()
  // console.log('users:', users)
  res.json(users)
})

app.post('/user/create', (req, res) => {
  console.log('req.body:', req.body)
  // res.send('Usuario!')
  // newUser()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


async function dbConnection() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to DB.')
}

dbConnection()
  .then(console.log)
  .catch(console.error)
  
