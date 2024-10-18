import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  // bu fonksiyon ile kullanıcı kaydı yapılacak
  try {
    const { fullName, userName, email, password, confirmPassword, gender } =
      req.body; // req.body den gelen verileri al
      console.log(req.body);

    if (password != confirmPassword) {
      // şifreler eşleşmiyorsa hata döndür
      return res.status(400).json({ error: "Password does not match." });
    }

    if (password.length < 6) {
      // şifre 6 karakterden kısa ise hata döndür
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters long." });
    }

    if (!email.includes("@") || !email.includes(".com")) {
      // email adresi geçerli değilse hata döndür
      return res.status(400).json({ error: "Invalid email." });
    }

    if (!fullName || !userName || !email || !password || !confirmPassword || !gender) {
      // eksik veri varsa hata döndür
      return res.status(400).json({ error: "Please fill all the fields." });
    }

    

    const user = await User.findOne({ userName }); // kullanıcı adı veritabanında var mı kontrol et

    if (user) {
      // kullanıcı adı varsa hata döndür
      return res.status(400).json({ error: "User already exists." });
      // res.status(400) => Bad Request
    }
    // kullanıcı adı yoksa yeni kullanıcı oluştur

    //  hash password here
    const salt = await bcrypt.genSalt(10); // bcrypt kütüphanesi ile şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, salt); // bu satır şunu yapar: password => hashedPassword
    // şifreyi haslemek demek, şifreyi bir algoritma ile karıştırarak veriyi güvenli hale getirmek demektir
    //örnek -> "q91aL2zBUXar1taewEmEWuueSIlCYN7N5NGf34F39LASwjJhc8/P2" gibi bir şifre oluşturur

    // https://avatar-placeholder.iran.liara.run/

    // boyProfilePic ve girlProfilePic değişkenlerine kullanıcı adına göre profil resmi oluşturuluyor
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      email,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // generate JWT token -> JWT token oluştur (JWT: JSON Web Token)
      generateTokenAndSetCookie(newUser._id, res); // token oluştur ve cookie'ye kaydet
      await newUser.save(); // yeni kullanıcıyı kaydet

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      }); // başarılı mesaj döndür
      // res.status(201) => Created
    } else {
      res.status(400).json({ error: "Invalid user data ." });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Server error occurred." });
  }
};

export const login = async (req, res) => {
  // bu fonksiyon ile kullanıcı girişi yapılacak
  try {
    const {userName, password} = req.body; // req.body den gelen verileri al
    const user = await User.findOne({ userName }); // kullanıcı adına göre kullanıcıyı bul
    const isPasswordCorrect = await bcrypt.compare(password, user?.password); // şifre doğru mu kontrol et (compare = karşılaştırmak)
 
    if (!user || !isPasswordCorrect) {
      // kullanıcı bulunamazsa veya şifre yanlışsa hata döndür
      return res.status(400).json({ error: "Invalid username or password." || ""}); // res.status(400) => Bad Request
      // || "" -> eğer hata mesajı yoksa boş bir string döndür
    }


    generateTokenAndSetCookie(user._id, res); // token oluştur ve cookie'ye kaydet

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      email: user.email,
      profilePicture: user.profilePicture,
    });  

  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Server error occurred." });
  }
};

export const logout = (req, res) => {
  // bu fonksiyon ile kullanıcı çıkışı yapılacak
  try {
    res.cookie("jwt", "", {
      maxAge:0
    }); // cookie'yi sil. Bu şekilde kullanıcı çıkış yapmış olur
    res.status(200).json({ message: "Logout successful." });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Server error occurred." });
    
  }
};
