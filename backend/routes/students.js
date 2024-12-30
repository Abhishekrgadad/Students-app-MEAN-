const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// GET: List all the students present in the database
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: "An error occurred in GET route", error: error });
    }
});

// GET BY ID: Find the particular student by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findOne({ _id: id });
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: 'An error occurred in GET BY ID route', error: error });
    }
});

//Get by USN: get student data by usn

// router.get('/:usn', async(req,res)=>{
//     try {
//         const usn = req.params.usn;
//         const student = await Student.findOne({usn});
//         res.status(200).json(student);
//     } catch (error) {
//         res.status(400).json({message:'An error occured to get data by USN', error:error});
//     }
// });

// POST: Create a new student data
router.post('/', async (req, res) => {
    try {
        const { usn, email } = req.body;

        // Check for duplicate USN
        const existingUsn = await Student.findOne({ usn });
        if (existingUsn) {
            return res.status(400).json({ message: 'USN already exists' });
        }

        // Check for duplicate email
        const existingEmail = await Student.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const student = new Student(req.body);
        const saveStudent = await student.save();
        res.status(200).json(saveStudent);
    } catch (error) {
        res.status(400).json({ message: 'An error occurred in POST route', error: error });
    }
});

// PUT: Update a student data by ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { usn, email } = req.body;

        // Check for duplicate USN
        const existingUsn = await Student.findOne({ usn, _id: { $ne: id } }); // Exclude current ID
        if (existingUsn) {
            return res.status(400).json({ message: 'USN already exists' });
        }

        // Check for duplicate email
        const existingEmail = await Student.findOne({ email, _id: { $ne: id } }); // Exclude current ID
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const student = req.body;
        const updatedStudent = await Student.findOneAndUpdate(
            { _id: id },
            { $set: student },
            { new: true }
        );
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: 'An error occurred in Update route', error: error });
    }
});

// DELETE: Delete a student data by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedStudent = await Student.deleteOne({ _id: id });
        res.status(200).json(deletedStudent);
    } catch (error) {
        res.status(400).json({ message: 'An error occurred in DELETE route', error: error });
    }
});

module.exports = router;
