import express from 'express';
import mongoose from 'mongoose';

import CategoryMessage from '../models/Category.js';

const router = express.Router();


export const createCategory = async (req, res) => {
    const { id,name,items } = req.body;

    const newCategoryMessage = new CategoryMessage({deps})

    try {
        await newCategoryMessage.save();

        res.status(201).json(newCategoryMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Category with id: ${id}`);

    await CategoryMessage.findByIdAndRemove(id);

    res.json({ message: "Category deleted successfully." });
}



export default router;
