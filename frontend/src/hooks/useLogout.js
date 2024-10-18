import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setloading] = useState(false); // Butona basıldığında loading ekranı göstermek için
  const { setauthUser } = useAuthContext(); // AuthContext'i kullanmak için

  const logout = async () => {
    setloading(true); // Butona basıldığında loading ekranı göstermek için
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, // request'in içeriğinin json formatında olduğunu belirt
      }); // fetch fonksiyonu, bir url'e request atmak için kullanılır

      const data = await res.json(); // response'u json formatına çevir
      if (data.error) {
        throw new Error(data.error); // Eğer bir hata varsa bu hatayı fırlat
      }
      // localStorage
      localStorage.removeItem("chatAppUser"); // localStorage'dan chatAppUser'ı sil
      // Context
      setauthUser(null); // AuthContext'teki authUser state'ini null yap
    } catch (error) {
      // Eğer bir hata olursa bu blok çalışır
        toast.error("Error: " + error.message);
    } finally {
      // Her durumda çalışacak blok
      setloading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
