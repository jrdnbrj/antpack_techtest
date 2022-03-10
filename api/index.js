require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const { 
  allUsers, 
  userById,
  newUser,
  updateUser,
  removeUser
} = require('./src/userResolver')


const app = express()
const port = 8000

app.use(express.json()) 

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {
  const users = await allUsers()
  res.json(users)
})

app.get('/user/:id', async (req, res) => {
  console.log('ID:', req.params.id)
  const user = await userById(req.params.id)
  res.json(user)
})

app.post('/user/create', async (req, res) => {
  const user = await newUser(req.body)
  let response = {}
  
  if (user && user._id)
    response = {
      created: true,
      message: 'Usuario creado correctamente',
    }
  else 
    response = {
      created: false,
      message: 'Error al crear el usuario',
    }

  res.json(response)
})

app.post('/user/edit', async (req, res) => {
  const user = await updateUser(req.body)
  let response = {}
  
  if (user && user._id)
    response = {
      created: true,
      message: 'Usuario editado correctamente',
    }
  else
    response = {
      created: false,
      message: 'Error al editar el usuario',
    }

  res.json(response)
})

app.post('/user/delete', async (req, res) => {
  const user = await newUser(req.body)
  let response = {}
  
  if (user && user._id)
    response = {
      created: true,
      message: 'Usuario eliminado correctamente',
    }
  else
    response = {
      created: false,
      message: 'Error al eliminar el usuario',
    }
  
  res.json(response)
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
  
