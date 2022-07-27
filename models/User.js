import mongoose from "mongoose";
import generateRobohashAvatar  from '../helpers/avatar.js'

const UserSchema = new mongoose.Schema({

  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String },
  ip: { type: String},
  hash: {type: String, required: true},
  avatar: {type: String, default: generateRobohashAvatar },
  dates: {
    registered: {type: Date,
    default: Date.now(),
    last_active: { type: Date}
  }},
  messages: { type: Number, default: 0},
});


const User = mongoose.model("User", UserSchema);

export default User;
