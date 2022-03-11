const express = require('express');
const router = express.Router();

const {
    allUsers,
    userById,
    newUser,
    updateUser,
    removeUser,
    importAPIUsers
} = require('../controllers/userController')


router.get('/', async (req, res) => 
    res.send(await allUsers()))

router.get('/:id', async (req, res) => 
    res.send(await userById(req.params.id)))

router.post('/create', async (req, res) => 
    res.json(await newUser(req.body)))

router.post('/edit', async (req, res) => 
    res.json(await updateUser(req.body)))

router.delete('/delete/:id', async (req, res) => 
    res.json(await removeUser(req.params.id)))

router.post('/import', async (req, res) =>
    res.json(await importAPIUsers(req.body)))

module.exports = router;
