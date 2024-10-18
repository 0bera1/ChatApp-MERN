import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext(); // AuthContext'i kullanmak için
  return (
    <>
      <div
        className="p-4 h-screen sm:flex items-center 
        justify-center overflow-scroll" >
        <Routes>
          {/* Eğer kullanıcı giriş yapmamışsa ana sayfaya gitsin */}
          <Route path="/" element={authUser ? < Home /> : <Navigate to='/login' />} />
          {/* Eğer kullanıcı giriş yapmışsa login sayfasına gitmesin */}
          <Route path="/login" element={authUser ? <Navigate to='/' /> : < Login />} />
          {/* Eğer kullanıcı giriş yapmışsa signup sayfasına gitmesin */}
          <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />

        </Routes> {/*  Routes component'i, sayfalar arasında geçiş yapmak için kullanılır */}
        <Toaster /> {/* Toaster component'i, hata mesajlarını göstermek için kullanılır 
        <Toaster/> ı burada kullanmak projenin her yerinde kullanabilmemizi sağlar. */}
      </div>
    </>
  )
}

export default App
