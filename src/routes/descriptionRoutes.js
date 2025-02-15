import express from 'express'
import { addDescription, getDescription } from '../controllers/descriptionController.js'
const router=express.Router()
router.post('/:userId/:description/:date',addDescription)
router.get('/:userId',getDescription)
export default router
