import express from 'express';

import {  getCategory, deleteCategory } from '../controllers/Category.js';

const router = express.Router();

router.category('/', createCategory);
router.delete('/:id', deleteCategory);

export default router;
