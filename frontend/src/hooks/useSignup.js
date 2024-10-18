import  { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setloading] = useState(false); // Butona basıldığında loading ekranı göstermek için
  const signup = async ({ // Butona basıldığında çalışacak fonksiyon
    fullName,
    userName,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      gender,
    }); // inputları kontrol et
    if (!success) return; // Eğer hatalı input varsa fonksiyon burada sonlanır

    setloading(true); // Butona basıldığında loading ekranı göstermek için
    try { // Bu try-catch bloğu, post request'i yapmak için kullanılır.
      const res = await fetch("/api/auth/signup", {
        // backend'e post request at
        // Post request ne demek ? -> Yeni bir veri oluşturmak için kullanılır
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, // request'in içeriğinin json formatında olduğunu belirt
        body: JSON.stringify({
          fullName,
          userName,
          email,
          password,
          confirmPassword,
          gender,
        }), // request'in içeriği
      });  // fetch fonksiyonu, bir url'e request atmak için kullanılır
      const data = await res.json(); // response'u json formatına çevir
      console.log(data); // response'u console'da göster
    } catch (error) { // Eğer bir hata olursa bu blok çalışır
      toast.error("Error: " + error.message);
    } finally { // Her durumda çalışacak blok
      setloading(false);
    }
  };
  return { loading, signup }; // signup fonksiyonunu ve loading state'ini döndür
};

export default useSignup;

function handleInputErrors({ // inputları kontrol et
  fullName,
  userName,
  email,
  password,
  confirmPassword,
  gender,
}) { // Eğer hatalı input varsa toast mesajı göster
  if (
    !fullName ||
    !userName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill all the fields");
    return false; 
  } 

  if (password !== confirmPassword) { // Eğer password ve confirmPassword aynı değilse toast mesajı göster
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) { // Eğer password 6 karakterden kısa ise toast mesajı göster
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  if (!email.includes("@") || !email.includes(".com")) { 
    toast.error("Invalid email");
    return false;
  } // Eğer email adresi geçerli formatta değilse toast mesajı göster

  // NOT: Aynı username ile kayıtlı kullanıcı var mı kontrol et
  return true; 
  // Eğer hatalı input yoksa işlemleri true döndür ve handleInputErrors fonksiyonunun çalışmasını sağla.
}
