import { BsSend } from "react-icons/bs";

const MessagesInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='w-full relative'>
                <input
                    type="text" placeholder="Send a message"
                    className=" border w-full text-sm rounded-lg block p-1.5
                             transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-2 focus:ring-teal-300"
                />
                <button 
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                    <BsSend className="" />
                </button>
            </div>

        </form>
    )
}

export default MessagesInput
