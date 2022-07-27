import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: { type: String, required: true },
  dates: {
    created: { type: Date, default: Date.now()}, 
    last_edited: Date
  },
  category: { type: String, enum: ["Comment", "Question", "Announcement"] },
  deleted: { type: Boolean, default: false },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
