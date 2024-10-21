import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setloading] = useState(false);
  // [En] We are using the useConversation hook to access the messages, setMessage, and selectedConversation variables.
  // [Tr] messages, setMessage ve selectedConversation değişkenlerine erişmek için useConversation kancasını kullanıyoruz.
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setloading(true);
    try {
      // [En] We are sending a POST request to the server with the message object.
      // [Tr] Mesaj nesnesini içeren bir POST isteği gönderiyoruz.
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          // [En]
          // We are sending a POST request to the server with the message object.
          // [Tr]
          // Mesaj nesnesini içeren bir POST isteği gönderiyoruz.
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // [En] We are sending the message object as a JSON string. [Tr] Mesaj nesnesini JSON dizesi olarak gönderiyoruz.
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // [En] We are adding the new message to the messages array.
      // [Tr] Yeni mesajı mesajlar dizisine ekliyoruz.
      setMessages([...messages, data]);
    } catch (error) {
      // [En] We are displaying an error toast if the request fails.
      // [Tr] İstek başarısız olursa bir hata tostu gösteriyoruz.
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  // [En] We are returning the sendMessage function and the loading state.
  // [Tr] sendMessage fonksiyonunu ve loading durumunu döndürüyoruz.
  return { sendMessage, loading };
};

export default useSendMessage;
