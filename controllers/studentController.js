import studentModel from "../models/students.js";

export const addStudent = async (req, res) => {

    try {
        const { id, name, email, regNo, course } = req.body
        const newStd = new studentModel({ id, name, email, regNo, course })

        await newStd.save()
        res.status(200).json(newStd)
    } catch (er) {
        res.status(500).json({ message: "Error adding student", error: er.message })
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const std = await studentModel.find()
        res.json(std)
    } catch (err) {
        res.status(500).json({ message: "Error fetching students" })
    }
}

export const getStudentById = async (req, res) => {
    try {
        const stdID = req.params.id
        const student = await studentModel.findOne({ id: stdID })
        if (!student) 
            return res.status(404).json({ message: "Student Not found" })
        res.status(200).json(student)
    } catch (err) {
        res.status(500).json({ message: "Error fetching student" })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, regNo, course } = req.body
        const updated = await studentModel.findOneAndUpdate(
            { id }, 
            { name, email, regNo, course }, 
        ) 
        if (!updated) 
            return res.status(404).json({ message: "Student not found" });
        res.json(updated)
    } catch (error) {
        res.status(500).json({ message: "Error updating student" })
    }
}

export const deleteStudent = async (req, res) => {

    try {
        const id = req.params.id;
        const deleted = await studentModel.findOneAndDelete({ id });
        if (!deleted) 
            return res.status(404).json({ message: "Student not found" });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student" });
    }
}