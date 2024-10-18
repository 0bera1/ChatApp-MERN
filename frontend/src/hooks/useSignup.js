import  { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setloading] = useState(false);

  const signup = async ({
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
    });
    if (!success) return;

    setloading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        // backend'e post request at
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json(); // response'u json formatına çevir
      console.log(data);
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  userName,
  email,
  password,
  confirmPassword,
  gender,
}) {
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

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  if (!email.includes("@") || !email.includes(".com")) {
    toast.error("Invalid email");
    return false;
  }

  // NOT: Aynı username ile kayıtlı kullanıcı var mı kontrol et
  return true;
}
