import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <div
        className="p-4 h-screen sm:flex items-center 
        justify-center overflow-scroll" >
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/login" element={< Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
