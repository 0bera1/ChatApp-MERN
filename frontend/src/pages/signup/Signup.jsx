import { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';

const Signup = () => {
    const [UsernameisFocused, setUsernameIsFocused] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [FullnameIsFocused, setFullnameIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);

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
                    Sign up&nbsp;
                    <span
                        className="text-teal-500 drop-shadow-lg"
                    >ChatApp</span>
                </h1>
                <form >
                    {/* Full Name */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text transition-all duration-500 ${FullnameIsFocused ? "text-lime-300" : "text-base"}`}
                            >
                                Full Name:
                            </span>
                        </label>
                        <input
                            type="text" placeholder="Jhon Doe" 
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setFullnameIsFocused(true)}
                            onBlur={() => setFullnameIsFocused(false)}
                        />
                    </div>
                    {/* Username */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text transition-all duration-500 ${UsernameisFocused ? "text-lime-300" : "text-base"}`}
                            >
                                Username:
                            </span>
                        </label>
                        <input
                            type="text" placeholder="john_doe"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setUsernameIsFocused(true)}
                            onBlur={() => setUsernameIsFocused(false)}
                        />
                    </div>
                    {/* password */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text transition-all duration-500 ${isFocused ? "text-lime-300" : "text-base"}`}
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
                        />
                    </div>
                    {/* Confirm password */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text transition-all duration-500 ${isFocused2 ? "text-lime-300" : "text-base"}`}
                            >
                                Confirm Password:
                            </span>
                        </label>
                        <input
                            type="password" placeholder="Confirm password"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setIsFocused2(true)}
                            onBlur={() => setIsFocused2(false)}
                        />
                    </div>

                    {/* Gender checkbox */}
                    <GenderCheckBox />
                    {/* Underline animation on Already have an account? text */}
                    <a
                        href="#"
                        className="text-sm relative transition-all duration-700 ease-in-out ml-2
                    before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
                    before:bg-lime-300 before:transition-all before:duration-500 
                    hover:before:w-full hover:text-lime-300 mt-2 inline-block"
                    >
                        {"Already have an account?"}
                    </a>
                    {/* Sign Up button */}
                    <div>
                        <button
                            className="btn btn-block mt-2 btn-sm 
                            transition-all duration-300 ease-in-out transform hover:scale-105 
                            hover:bg-lime-600 hover:text-lime-50 hover:border-lime-500 
                            hover:shadow-[0_0_20px_rgba(154,255,102,0.5)]"
                        >
                            Sign Up
                        </button>
                    </div>
                    </form>
            </div>
        </div>
    )
}

export default Signup


// STARTER CODE FOR THE SIGNUP COMPONENT || TURKISH -> BU DOSYA İÇİN BAŞLANGIÇ KODU

// <div
//             className="flex flex-col items-center justify-center min w-96 mx-auto"
//         >
//             <div
//                 className="w-full p-6 shadow-2xl shadow-neutral drop-shadow-2xl rounded-lg  bg-gray-400 bg-clip-padding 
//             backdrop-filter backdrop-blur-xl bg-opacity-0 border border-lime-300 border-opacity-[0.05]"
//             >
//                 <h1
//                     className="text-3xl font-semibold text-center text-lime-100 "
//                 >
//                     Sign up&nbsp;
//                     <span
//                         className="text-teal-500 drop-shadow-lg"
//                     >ChatApp</span>
//                 </h1>
//                 <form >
//                     {/* Full Name */}
//                     <div>
//                         <label
//                             className="label p-2"
//                         >
//                             <span
//                                 className={`text-base label-text transition-all duration-500 ${FullnameIsFocused ? "text-lime-300" : "text-base"}`}
//                             >
//                                 Full Name:
//                             </span>
//                         </label>
//                         <input
//                             type="text" placeholder="Jhon Doe" 
//                             className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
//                             focus:outline-0 focus:ring-1 focus:ring-lime-300"
//                             onFocus={() => setFullnameIsFocused(true)}
//                             onBlur={() => setFullnameIsFocused(false)}
//                         />
//                     </div>
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
//                             type="text" placeholder="john_doe"
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
//                     {/* Confirm password */}
//                     <div>
//                         <label
//                             className="label p-2"
//                         >
//                             <span
//                                 className={`text-base label-text transition-all duration-500 ${isFocused2 ? "text-lime-300" : "text-base"}`}
//                             >
//                                 Confirm Password:
//                             </span>
//                         </label>
//                         <input
//                             type="password" placeholder="Confirm password"
//                             className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
//                             focus:outline-0 focus:ring-1 focus:ring-lime-300"
//                             onFocus={() => setIsFocused2(true)}
//                             onBlur={() => setIsFocused2(false)}
//                         />
//                     </div>

//                     {/* Gender checkbox */}
//                     <GenderCheckBox />
//                     {/* Underline animation on Already have an account? text */}
//                     <a
//                         href="#"
//                         className="text-sm relative transition-all duration-700 ease-in-out ml-2
//                     before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
//                     before:bg-lime-300 before:transition-all before:duration-500 
//                     hover:before:w-full hover:text-lime-300 mt-2 inline-block"
//                     >
//                         {"Already have an account?"}
//                     </a>
//                     {/* Sign Up button */}
//                     <div>
//                         <button
//                             className="btn btn-block mt-2 btn-sm 
//                             transition-all duration-300 ease-in-out transform hover:scale-105 
//                             hover:bg-lime-600 hover:text-lime-50 hover:border-lime-500 
//                             hover:shadow-[0_0_20px_rgba(154,255,102,0.5)]"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                     </form>
//             </div>
//         </div>
//     )
// }

// export default Signup
