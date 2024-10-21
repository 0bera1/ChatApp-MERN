import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../store/useConversation"

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    // [En]
    // isSelected is a boolean that checks if the conversation is selected 
    // by comparing the selectedConversation's _id with the conversation's _id
    // [Tr]
    // isSelected, seçilen sohbetin _id'sini sohbetin _id'siyle karşılaştırarak
    // sohbetin seçilip seçilmediğini kontrol eden bir booleandır.
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);  // Check if the user is online
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-teal-500 rounded p-2 py-1 cursor-pointer 
                ${isSelected ? "bg-teal-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePicture}
                            alt='user avatar' />
                    </div>
                </div>
                <div className='flex flex-col flex-1 '>
                    <div className='flex gap-3 justify-between '>
                        <p className='font-bold text-gray-200'>
                            {conversation.fullName}
                        </p>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation

// STARTER CODE FOR THE LOGIN COMPONENT || TURKISH -> BU DOSYA İÇİN BAŞLANGIÇ KODU
// import React from 'react'

// const Conversation = () => {
//     return (
//         <>
//             <div className='flex gap-2 items-center hover:bg-lime-500 rounded p-2 py-1 cursor-pointer '>


//                 <div className='avatar online'>
//                     <div className='w-12 rounded-full'>
//                         <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt='user avatar' />
//                     </div>
//                 </div>
//                 <div className='flex flex-col flex-1 '>
//                     <div className='flex gap-3 justify-between '>
//                         <p className='font-bold text-gray-200'>
//                             Bera Ekimci
//                         </p>
//                         <span className='text-xl' >
//                             🎃
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             <div className='divider my-0 py-0 h-1' />
//         </>
//     )
// }

// export default Conversation
