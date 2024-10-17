import Messages from './Messages'
import MessagesInput from './MessagesInput'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  const chatSelected = true; // değişecek kısım, şuan yalnızca temsili
  return (
    <div className='md:min-w-[650px] flex flex-col '>
      {chatSelected ? <NoChatSelected /> : (
        <>
          {/* Header */}
          <div className='bg-teal-500 px-4 py-2 mb-2 '>
          <span className='label-text text-gray-100'>To&nbsp;</span>
          <span className='text-gray-100 font-bold '>Jhon Doe</span>
        </div>

        <Messages />
        <MessagesInput />
      </>
      )}

        </div>
      )
}

      export default MessageContainer


const NoChatSelected = () => {
  return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold
      flex flex-col items-center gap-2'>
          <p>Welcome 👋 Username</p>
          <p>Select a chat to start texting!</p>
          <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
      </div>
      );
};