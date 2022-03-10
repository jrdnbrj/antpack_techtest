require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const { 
  allUsers, 
  userById,
  newUser,
  updateUser,
  removeUser,
  importUsers
} = require('./src/userResolver')


const app = express()
const port = 8000

app.use(express.json()) 

app.use(cors({ origin: '*' }));

app.get('/users', async (req, res) => 
  res.send(await allUsers()))

app.get('/user/:id', async (req, res) => 
  res.send(await userById(req.params.id)))

app.post('/user/create', async (req, res) => 
  res.json(await newUser(req.body)))

app.post('/user/edit', async (req, res) => 
  res.json(await updateUser(req.body)))

app.delete('/user/delete/:id', async (req, res) => 
  res.json(await removeUser(req.params.id)))

app.post('/users/import', async (req, res) =>
  res.json(await importUsers(req.body)))

app.listen(port, () => console.log(`Listening on port ${port}`))

async function dbConnection() {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to DB.')
}

dbConnection()
  .then(console.log)
  .catch(console.error)
  