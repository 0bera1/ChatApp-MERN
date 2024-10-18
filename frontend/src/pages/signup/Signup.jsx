import { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [UsernameisFocused, setUsernameIsFocused] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [FullnameIsFocused, setFullnameIsFocused] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [EmailisFocused, setEmailIsFocused] = useState(false);

    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const {loading,signup} = useSignup();

    const handleCheckBox = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
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
                    Sign up&nbsp;
                    <span
                        className="text-teal-500 drop-shadow-lg"
                    >ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base text-gray-300 label-text transition-all duration-500 ${FullnameIsFocused ? "text-lime-300" : "text-base"}`}
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
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
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
                            type="text" placeholder="john_doe"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setUsernameIsFocused(true)}
                            onBlur={() => setUsernameIsFocused(false)}
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text text-gray-300 transition-all duration-500 ${EmailisFocused ? "text-lime-300" : "text-base"}`}
                            >
                                Email:
                            </span>
                        </label>
                        <input
                            type="text" placeholder="john_doe"
                            className="w-full input input-bordered h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300"
                            onFocus={() => setEmailIsFocused(true)}
                            onBlur={() => setEmailIsFocused(false)}
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    {/* Confirm password */}
                    <div>
                        <label
                            className="label p-2"
                        >
                            <span
                                className={`text-base label-text text-gray-300 transition-all duration-500 ${isFocused2 ? "text-lime-300" : "text-base"}`}
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
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Gender checkbox */}
                    <GenderCheckBox
                        onCheckboxChange={handleCheckBox}
                        selectedGender={inputs.gender}
                    />
                    {/* Underline animation on Already have an account? text */}
                    <Link
                        to={"/login"}
                        className="text-sm text-gray-300 relative transition-all duration-700 ease-in-out ml-2
                    before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px]
                    before:bg-lime-300 before:transition-all before:duration-500 
                    hover:before:w-full hover:text-lime-300 mt-2 inline-block"
                    >
                        {"Already have an account?"}
                    </Link>
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
