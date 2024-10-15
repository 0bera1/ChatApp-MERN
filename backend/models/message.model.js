import mongoose from 'mongoose';
import mangoose from 'mongoose';

const messageSchema = new mangoose.Schema({ // yeni bir mesaj için şema oluştur.
    senderID: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    receiverID:{
        ref:'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
// createdAt, updatedAt => message.createdAT : 15.30 

}, {timestamps: true});

// yeni bir mesaj için model oluştur.
const Message = mongoose.model('Message', messageSchema);

export default Message;
