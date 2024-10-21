import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessagesInput = () => {

    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(message);
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className='px-4 my-3'
            onSubmit={handleSubmit}
        >
            <div className='w-full relative'>
                <input
                    type="text" placeholder="Send a message"
                    className=" border w-full text-sm rounded-lg block p-1.5
                             transition-all duration-500 ease-in-out
                            focus:outline-0 focus:ring-2 focus:ring-teal-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend className='text-teal-500 text-xl' />}
                </button>
            </div>

        </form>
    )
}

export default MessagesInput
