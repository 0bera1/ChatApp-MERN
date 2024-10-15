import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userID, res) => {
  // generate JWT token -> JWT token oluştur (JWT: JSON Web Token)
  // jwt.sign() fonksiyonu ile JWT token oluşturulur
  // process.env.JWT_SECRET -> .env dosyasında tanımlanan gizli anahtar
  // expiresIn: '15d' -> token'ın geçerlilik süresi 15 gün

  // when we verify token we will understand it better <3 ( tokenı doğruladığımızda daha iyi anlayacağız<3 )
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // cookie'ye token'ı kaydet
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 gün, 24 saat, 60 dakika, 60 saniye, 1000 milisaniye
    httpOnly: true, // sadece sunucu tarafından okunabilir (client tarafından değil)
    // Prevent XSS attacks cross-site scripting attacks (XSS saldırılarını önle (xss: çapraz site komut dosyası))
    sameSited: "strict", // sadece aynı site üzerinden erişilebilir
    secure: process.env.NODE_ENV !== "development", // sadece https üzerinden erişilebilir, secure şu anlama gelir: geliştirme ortamında değilse.
    // NODE_ENV=development => geliştirme ortamı
});
};

export default generateTokenAndSetCookie;
