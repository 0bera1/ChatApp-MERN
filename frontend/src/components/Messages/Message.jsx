import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../store/useConversation';
import { ExtractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderID === authUser._id;
    const extTime = ExtractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePicture = fromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
    const bubbleBgColor = fromMe ? 'bg-teal-700' : 'bg-slate-800';

    const shakeClass = message.shouldShake ? 'shake' : '';

    return (
        <>

            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePicture} />
                    </div>
                </div>
                <div className={`chat-bubble  ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
                <div className="chat-footer">
                    {/* Time of message */}
                    <time className="text-xs opacity-30  text-white">{extTime}</time>
                </div>
            </div>
        </>
    )
}

export default Message
