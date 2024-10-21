import { useEffect, useState } from "react"
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";


const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();  

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);
            try {
                // [En] We are sending a GET request to the server to get the messages of the selected conversation.
                // [Tr] Seçilen konuşmanın mesajlarını almak için sunucuya bir GET isteği gönderiyoruz.
                const res = await fetch(`/api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                // [En] We are setting the messages to the response data.
                // [Tr] Mesajları yanıt veriye ayarlıyoruz.
                setMessages(data);

            } catch (error) {
                toast.error(error.message);
            }finally {
                setLoading(false);
            }
        }
        if(selectedConversation?._id) getMessage();
    },[selectedConversation?._id, setMessages]);

    return {loading, messages};
}

export default useGetMessage