import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverID } = req.params; // const userID = req.params.userID;
    const senderID = req.user._id; // const senderID = req.user._id;
    // conversation fonksiyonu şu anki kullanıcı ve alıcı arasında bir konuşma olup olmadığını kontrol eder.
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderID, receiverID],
      },
    });
    // Eğer bir konuşma yoksa yeni bir konuşma oluştur. Yeni idlendirme yap.
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderID, receiverID],
      });
    }
    // Yeni bir mesaj oluştur.
    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // We will make operations real-time using socket.io  (socket.io kullanarak işlemleri gerçek zamanlı yapılabilir hale getireceğiz. )

    // Konuşmayı kaydet.
    // await conversation.save();  1 saniye burada bekleyecek.
    // Yeni mesajı kaydet.
    // await newMessage.save();    1 saniye burada bekleyecek.

    // Yukarıdaki iki satırı tek bir satırda yazabiliriz. (ayrı ayrı en az 1'er sanıye beklemek yerine birlikte 1 saniye bekler)
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE ! (SOCKET IO FONKSİYONELLİĞİ BURAYA GELECEK !)
    const receiverSocketId = getRecieverSocketId(receiverID);
    if (receiverSocketId) {
      // Emit the new message to the receiver (Alıcıya yeni mesajı gönder)
      // io.to(<socketID>).emit() used to send the events to the specific client 
      //(io.to(<socketID>).emit(), belirli istemciye olayları göndermek için kullanılır)
      io.to(receiverSocketId).emit("newMessage", newMessage); 
    }
    


    res.status(201).json(newMessage); // res.status(201) => Created
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Server error occurred." });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatID } = req.params; // const userToChatID = req.params.userID;
    const senderID = req.user._id; // const senderID = req.user._id;
    const conversation = await Conversation.findOne({ // conversation fonksiyonu şu anki kullanıcı ve alıcı arasında bir konuşma olup olmadığını kontrol eder.
      participants: { 
        $all: [senderID, userToChatID], 
      },
    }).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES (REFERANS DEĞİL GERÇEK MESAJLAR)
    // populate mongoose'un şunu sağlayan bir fonksiyonudur: 
    //conversation.messages içindeki message id'lerini gerçek mesajlarla değiştirir.
    // populate fonksiyonunun temel özelliklerinden biri, bir dökümanın içindeki başka bir dökümanın id'sini alıp onunla ilgili dökümanı getirmesidir.
    
    if (!conversation) return res.status(200).json([]); // Eğer konuşma yoksa boş bir array döndür.
    const messages = conversation.messages; // Eğer konuşma varsa mesajları al.
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Server error occurred." });
  }
};
