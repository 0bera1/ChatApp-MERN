import MessageContainer from "../../components/Messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
    return (
        <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden 
             bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border
             border-lime-300 border-opacity-[0.05]">
            <Sidebar/>
            <MessageContainer/>
        </div>
    )
}

export default Home

// STARTER CODE OF HOME.JSX
// import MessageContainer from "../../components/Messages/MessageContainer"
// import Sidebar from "../../components/sidebar/Sidebar"

// const Home = () => {
//     return (
//         <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden
//              bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0 border
//              border-lime-300 border-opacity-[0.05]">
//             <Sidebar/>
//         </div>
//     )
// }

// export default Home
