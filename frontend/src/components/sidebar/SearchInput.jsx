import { FcSearch } from "react-icons/fc";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2 m-2 ">
            <input
                type="text" placeholder="Search..."
                className=" w-full input input-bordered rounded-full h-10 transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-1 focus:ring-lime-300 "

            />
            <button type="submit"
                className="btn btn-circle bg-transparent
                            transition-all duration-200 ease-in-out transform hover:scale-110 
                            hover:bg-lime-600 hover:text-lime-50 border-0
                            hover:shadow-[0_0_20px_rgba(154,255,102,0.3)]">
                <FcSearch size={36} className=" outline-none" />
            </button>
        </form>
    )
}

export default SearchInput


// STARTER CODE FOR THE LOGIN COMPONENT || TURKISH -> BU DOSYA İÇİN BAŞLANGIÇ KODU
// import { FcSearch } from "react-icons/fc";

// const SearchInput = () => {
//     return (
//         <form className="flex items-center gap-2 m-2 ">
//             <input
//                 type="text" placeholder="Search..."
//                 className=" w-full input input-bordered rounded-full h-10 transition-all duration-500 ease-in-out
//                             focus:outline-0 focus:ring-1 focus:ring-lime-300 "

//             />
//             <button type="submit"
//                 className="btn btn-circle bg-transparent
//                             transition-all duration-200 ease-in-out transform hover:scale-110 
//                             hover:bg-lime-600 hover:text-lime-50 border-0
//                             hover:shadow-[0_0_20px_rgba(154,255,102,0.3)]">
//                 <FcSearch size={36} className=" outline-none" />
//             </button>
//         </form>
//     )
// }

// export default SearchInput
