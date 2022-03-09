const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const port = 3000

const { allUsers, newUser, usersFromApi } = require('./src/userResolver')

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  const users = await allUsers()
  console.log('users:', users)
  res.json(users)
})

app.get('/user/create', (req, res) => {
  res.send('Usuario!')
  newUser()
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

async function main() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to DB.')
}

main()
  .then(console.log)
  .catch(console.error)
  
// const client = new MongoClient(process.env.MONGODB_URI)

// async function dbConnection() {
//   await client.connect()
//   console.log('Connected to DB.')
// }

// dbConnection()
//  .then(console.log)
//  .catch(console.error)
//  .finally(() => client.close())
