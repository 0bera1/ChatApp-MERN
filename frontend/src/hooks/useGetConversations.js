import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setloading] = useState(false);
  // conversationları tutacak state tanımlanıyor
  const [conversations, setConversations] = useState([]);
  // useEffect hook'u ile conversationları getirme işlemi yapılıyor
  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        // fetch ile api'den conversationları getirme işlemi yapılıyor
        const res = await fetch("/api/users");
        const data = await res.json(); // gelen response json formatına çevriliyor
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data); // gelen conversationlar state'e set ediliyor
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };
    getConversations(); // getConversations fonksiyonu çağrılıyor
  }, []); // useEffect sadece bir kere çalıştırılacak şekilde ayarlandı, defalarca render edilmeyecek.
  return { loading, conversations };
};

export default useGetConversations;
