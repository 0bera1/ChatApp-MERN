import { useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import { createContext } from "react";
import { useContext } from "react";

const SocketContext = createContext();
// useSocketContext is a custom hook to use the SocketContext (useSocketContext, SocketContext'i kullanmak için özel bir kancadır)
export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => { // children is the App component in this case (children bu durumda App bileşenidir)

    const [socket, setSocket] = useState(null); // socket is null at the beginning (socket başlangıçta null'dır)
    const [onlineUsers, setOnlineUsers] = useState([]); // onlineUsers is an empty array at the beginning (onlineUsers başlangıçta boş bir dizi)
    const { authUser } = useAuthContext();  // get the authUser from the AuthContext (AuthContext'ten authUser'ı al)

    useEffect(() => { // useEffect is used to run the code when the component is mounted (useEffect, bileşen yüklendiğinde kodu çalıştırmak için kullanılır)
        if (authUser) {   // if the user is authenticated (kullanıcı kimlik doğrulaması yapıldıysa)
            const socket = io("http://localhost:5001", {
                query: { userId: authUser._id, } // send the userId to the server (userId'yi sunucuya gönder)
            }); // create a new socket connection (yeni bir soket bağlantısı oluştur)

            setSocket(socket); // set the socket to the state (soketi duruma ayarla)

            // socket.on() is used to listen for the events. Can be used both on client and server side. 
            // (socket.on(), olayları dinlemek için kullanılır. Hem istemci hem de sunucu tarafında kullanılabilir.)
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users); // set the online users to the state (çevrimiçi kullanıcıları duruma ayarla)
            })

            // return a function to close the socket connection when the component is unmounted (bileşen kaldırıldığında soket bağlantısını kapatmak için bir işlev döndür)
            return () => socket.close(); // close the socket connection (soket bağlantısını kapat)
        } else {    // if the user is not authenticated (kullanıcı kimlik doğrulaması yapılmadıysa)
            if (socket) { // if the socket is not null (soket null değilse)
                socket.close(); // close the socket connection (soket bağlantısını kapat)
                setSocket(null);    // set the socket to null (soketi null olarak ayarla)
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider
            value={{
                socket, onlineUsers
            }}>
            {children}
        </SocketContext.Provider>
    )
}