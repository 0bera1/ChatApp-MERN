import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({ // yeni bir konuşma için şema oluştur.
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: [], // default value is an empty array
        }
    ]
}, {timestamps: true}); // timestamps şu anlama gelir: mesaj oluşturulduğunda ve güncellendiğinde zamanı otomatik olarak kaydet

// yeni bir konuşma için model oluştur.
const Conversation = mongoose.model("Conversation", conversationSchema);    

export default Conversation;