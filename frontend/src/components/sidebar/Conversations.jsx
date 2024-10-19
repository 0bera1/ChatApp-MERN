import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations.js'

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log("CONVERSATIONS : ", conversations);
  return (
    <div
      className='py-2 flex flex-col overflow-auto'>

      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations

// STARTER CODE FOR THE LOGIN COMPONENT || TURKISH -> BU DOSYA İÇİN BAŞLANGIÇ KODU
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div
//     className='py-2 flex flex-col overflow-auto'
//     >
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations
