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

//GET BY ID: find the particular student by id

router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const student = await Student.findOne({_id: id});
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({message: 'An error occured in GETBYID route', error: error});
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

//PUT: Update a student data by id
router.put('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const student = req.body;
        const updatedStudent = student.findOneAndUpdate(
            {
                _id: id 
            },
            {
                $set: student
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({message:'An error occured in Update route', error:error});
    }
});

//DELETE : delete a student data by id
router.delete('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        let deletedStudent = await Student.deleteOne({_id: id});
        res.status(200).json(deletedStudent);
    } catch (error) {
        res.status(400).json({message:'An error occured in delete route',error:error});
    }
});


module.exports = router;