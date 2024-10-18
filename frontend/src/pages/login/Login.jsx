import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js";

const Login = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [UsernameisFocused, setUsernameIsFocused] = useState(false);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userName, password);
    }

    return (
        <div
            className="flex flex-col items-center justify-center min w-96 mx-auto"
        >
            <div
                className="w-full p-6 shadow-2xl shadow-neutral drop-shadow-2xl rounded-lg  bg-gray-400 bg-clip-padding 
            backdrop-filter backdrop-blur-xl bg-opacity-0 border border-lime-300 border-opacity-[0.05]"
            >
                <h1
                    className="text-3xl font-semibold text-center text-lime-100 "
                >
                    Login&nbsp;
                    <span
                        className="text-teal-500 drop-shadow-lg"
                    >ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Username */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text text-gray-300 transition-all duration-500 ${UsernameisFocused ? "text-lime-300" : "text-base"}`}
                            >
                                Username:
                            </span>
                        </label>
                        <input
                            type="text" placeholder="Enter your username"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setUsernameIsFocused(true)}
                            onBlur={() => setUsernameIsFocused(false)}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    {/* password */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text text-gray-300 transition-all duration-500 ${isFocused ? "text-lime-300" : "text-base"}`}
                            >
                                Password:
                            </span>
                        </label>
                        <input
                            type="password" placeholder="Enter your password"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/* Underline animation on Don't have an account? text */}
                    <Link
                        to={"/signup"}
                        className="text-sm text-gray-300  relative transition-all duration-700 ease-in-out 
                    before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
                    before:bg-lime-300 before:transition-all before:duration-500 
                    hover:before:w-full hover:text-lime-300 mt-2 inline-block"
                    >
                        {"Don't have an account?"}
                    </Link>
                    {/* Login button */}
                    <div>
                        <button
                            className="btn btn-block mt-2 btn-sm 
                            transition-all duration-300 ease-in-out transform hover:scale-105 
                            hover:bg-lime-600 hover:text-lime-50 hover:border-lime-500 
                            hover:shadow-[0_0_20px_rgba(154,255,102,0.5)]"
                            disabled={loading}
                        >
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login


// STARTER CODE FOR THE LOGIN COMPONENT || TURKISH -> BU DOSYA İÇİN BAŞLANGIÇ KODU

// const Login = () => {
//     const [isFocused, setIsFocused] = useState(false);
//     const [UsernameisFocused, setUsernameIsFocused] = useState(false);


//     return (
//         <div
//             className="flex flex-col items-center justify-center min w-96 mx-auto"
//         >
//             <div
//                 className="w-full p-6 shadow-2xl shadow-neutral drop-shadow-2xl rounded-lg  bg-gray-400 bg-clip-padding 
//             backdrop-filter backdrop-blur-xl bg-opacity-0 border border-lime-300 border-opacity-[0.05]"
//             >
//                 <h1
//                     className="text-3xl font-semibold text-center text-lime-100 "
//                 >
//                     Login&nbsp;
//                     <span
//                         className="text-teal-500 drop-shadow-lg"
//                     >ChatApp</span>
//                 </h1>
//                 <form >
//                     {/* Username */}
//                     <div>
//                         <label
//                             className="label p-2"
//                         >
//                             <span
//                                 className={`text-base label-text transition-all duration-500 ${UsernameisFocused ? "text-lime-300" : "text-base"}`}
//                             >
//                                 Username:
//                             </span>
//                         </label>
//                         <input
//                             type="text" placeholder="Enter your username"
//                             className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
//                             focus:outline-0 focus:ring-1 focus:ring-lime-300"
//                             onFocus={() => setUsernameIsFocused(true)}
//                             onBlur={() => setUsernameIsFocused(false)}
//                         />
//                     </div>
//                     {/* password */}
//                     <div>
//                         <label
//                             className="label p-2"
//                         >
//                             <span
//                                 className={`text-base label-text transition-all duration-500 ${isFocused ? "text-lime-300" : "text-base"}`}
//                             >
//                                 Password:
//                             </span>
//                         </label>
//                         <input
//                             type="password" placeholder="Enter your password"
//                             className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
//                             focus:outline-0 focus:ring-1 focus:ring-lime-300"
//                             onFocus={() => setIsFocused(true)}
//                             onBlur={() => setIsFocused(false)}
//                         />
//                     </div>
//                     {/* Underline animation on Don't have an account? text */}
//                     <a
//                         href="#"
//                         className="text-sm relative transition-all duration-700 ease-in-out 
//                     before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
//                     before:bg-lime-300 before:transition-all before:duration-500 
//                     hover:before:w-full hover:text-lime-300 mt-2 inline-block"
//                     >
//                         {"Don't have an account?"}
//                     </a>
//                     {/* Login button */}
//                     <div>
//                         <button
//                             className="btn btn-block mt-2 btn-sm 
//                             transition-all duration-300 ease-in-out transform hover:scale-105 
//                             hover:bg-lime-600 hover:text-lime-50 hover:border-lime-500 
//                             hover:shadow-[0_0_20px_rgba(154,255,102,0.5)]"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Login
