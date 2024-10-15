import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ // Create a new schema for the user
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 25,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String, 
    required: true,
    enum: ["male", "female", "other"],
  },
  profilePicture: {
    type: String,
    default: "",
  },
}, { timestamps: true }); // timestamps: true -> automatically add createdAt and updatedAt fields

// yeni bir kullanıcı için model oluştur.
const User = mongoose.model("User", userSchema); // Create a new model for the user

export default User;