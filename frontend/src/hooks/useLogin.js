import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setloading] = useState(false); // Butona basıldığında loading ekranı göstermek için
  const { setauthUser } = useAuthContext(); // AuthContext'i kullanmak için

  const login = async (userName, password) => {
    const success = handleInputErrors(userName, password);
    // inputları kontrol et
    if (!success) return; // Eğer hatalı input varsa fonksiyon burada sonlanır
    setloading(true); // Butona basıldığında loading ekranı göstermek için
    try {
      // Bu try-catch bloğu, post request'i yapmak için kullanılır.
      const res = await fetch("/api/auth/login", {
        // backend'e post request at
        // Post request ne demek ? -> Yeni bir veri oluşturmak için kullanılır
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, // request'in içeriğinin json formatında olduğunu belirt
        body: JSON.stringify({
          userName,
          password,
        }), // request'in içeriği
      }); // fetch fonksiyonu, bir url'e request atmak için kullanılır
      const data = await res.json(); // response'u json formatına çevir
      if (data.error) {
        throw new Error(data.error); // Eğer bir hata varsa bu hatayı fırlat
      }
      // localStorage
      localStorage.setItem("chatAppUser", JSON.stringify(data));
      // Context
      setauthUser(data); // AuthContext'teki authUser state'ini güncelle

      console.log(data); // response'u console'da göster
    } catch (error) {
      // Eğer bir hata olursa bu blok çalışır
      toast.error("Error: " + error.message);
    } finally {
      // Her durumda çalışacak blok
      setloading(false); // Loading ekranını kapat
    }
  };
  return { login, loading };
};

export default useLogin;

function handleInputErrors(
  // inputları kontrol et
  userName,
  password,
) {
    if (!userName|| !password) {
    // Eğer username veya password boşsa
    toast.error("Username and password cannot be empty!"); // Username ve password boş olamaz
    return false; // false döndür
    }
  // Eğer hatalı input varsa toast mesajı göster
  if (!userName) {
    // Eğer username boşsa
    toast.error("Username cannot be empty!"); // Username boş olamaz
    return false; // false döndür
  }
  if (!password) {
    // Eğer password boşsa
    toast.error("Password cannot be empty!"); // Password boş olamaz
    return false; // false döndür
  }

  return true;
  // Eğer hatalı input yoksa işlemleri true döndür ve handleInputErrors fonksiyonunun çalışmasını sağla.
}
