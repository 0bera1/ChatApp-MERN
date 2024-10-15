import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id; // şu anki kullanıcıyı al
    const filtredUsers = await User.find({
      _id: { $ne: loggedInUser }, // Kişi listesi için şu anki kullanıcı hariç tüm kullanıcıları getir.
    }).select("-password"); // password'u getirme
    res.status(200).json(filtredUsers); // res.status(200) => OK
} catch (error) {
    console.log("Error in getUsersForSidebar controller: ", error.message);
    res.status(500).json({ error: "Server error occurred." });
  }
};
