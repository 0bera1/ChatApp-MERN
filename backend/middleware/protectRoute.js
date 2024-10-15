import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => { // middleware fonksiyonu oluştur
  try {
    const token = req.cookies.jwt; // req.cookies.jwt'den token'ı al
    if (!token) { // eğer token yoksa hata döndür 
      return res.status(401).json({
        error: "Invalid Token - Unauthorized",
      });
      // res.status(401) => Unauthorized
      // şu anki kullanıcı token ile doğrulanamazsa hata döndür
      // KISACA TOKEN OLMADAN BU ROUTE'A ERİŞİM YASAK
      // Token demek kullanıcının giriş yapmış olduğunu gösteren bir anahtar
    }
    // token'ı çöz ve JWT_SECRET ile doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) { // eğer token çözülemezse hata döndür
      return res.status(401).json({  // res.status(401) => Unauthorized
        error: "Invalid Token - Unauthorized", 
      }); 
    }

    // token çözüldüğünde userID'yi al ve user'ı bul (select("-password") -> password'u getirme)
    const user = await User.findById(decoded.userID).select("-password");

    // eğer user bulunamazsa hata döndür
    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    req.user = user; // user'ı req objesine ekle

    next(); // middleware'den çık ve bir sonraki middleware'e git

  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(401).json({ error: "Not authorized to access this route." });
  }
};

export default protectRoute;