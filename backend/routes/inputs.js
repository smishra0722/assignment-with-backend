import express from 'express';
import {getInputs, createInput, updateInput, deleteInput} from '../controllers/inputs.js';
const router = express.Router();

router.get('/', getInputs);
router.post('/', createInput);
router.patch('/:id', updateInput);
router.delete('/:id', deleteInput);
export default router;