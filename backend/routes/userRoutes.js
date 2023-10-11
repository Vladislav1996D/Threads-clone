import express from 'express'
import { signupUser } from '../controlles/userController.js'

const router = express.Router()

router.post('/signup', signupUser)

export default router
