import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id: {type: Number, required:true, unique:true},
    name: {type:String, required: true},
    email : {type: String, required: true, unique: true},
    regNo : {type: String, required: true, unique: true},
    course: {type: String, required: true}
});

const studentModel = mongoose.model("student",studentSchema);

export default studentModel;