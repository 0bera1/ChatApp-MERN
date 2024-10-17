
const Message = () => {
    return (
        <>
            <div className='chat chat-start '>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img alt=' Tailwind CSS chat bubble component '
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        
                    </div>
                </div>
                <div className="chat-header text-gray-100">
                    {/* Time of message */}
                    <time className="text-xs text-white opacity-30">12:45</time>
                </div>
                <div className="chat-bubble bg-slate-800">You were the Chosen One!</div>
                <div className="chat-footer text-white opacity-30">Delivered</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-header">
                    {/* Time of message */}
                    <time className="text-xs opacity-30  text-white">12:46</time>
                </div>
                <div className="chat-bubble bg-teal-700">I hate you!</div>
                <div className="chat-footer opacity-30 text-white">Seen at 12:46</div>
            </div>
        </>
    )
}

export default Message
