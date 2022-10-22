import express from 'express';

import {createUser, getUser, getUsers, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();

// All routes here are starting with /users/
router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;