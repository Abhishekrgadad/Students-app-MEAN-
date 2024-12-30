const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

//GET: list all the students present in the database

router.get('/', async(req,res)=>{
    try {
        const students = await Student.find();
        res.status(200).json(students);     
    } catch (error) {
        res.status(400).json({message: "An error occured in GET route", error: error});
    }
});

//POST: create a New student data
router.post('/', async (req,res)=>{
    try {
        const student = new Student(req.body);
    const saveStudent = student.save();
    res.status(200).json(saveStudent);
    } catch (error) {
        res.status(400).json({message: 'An error occured in POST route', error:error});
    }
});

