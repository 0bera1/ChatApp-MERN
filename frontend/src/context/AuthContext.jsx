import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(); // Bu context ile kullanıcı bilgilerini tutacağız.

// eslint-disable-next-line react-refresh/only-export-components
// Bu hook'u kullanarak context'e erişebiliriz.
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setauthUser] = useState(
        JSON.parse(
            localStorage.getItem("chatAppUser") || null
        )
    ); // localStorage'dan chatAppUser'ı al, eğer yoksa null döndür ve authUser state'ine json formatında ata
    return (
        <AuthContext.Provider value={{ authUser, setauthUser }}>
            {children}
        </AuthContext.Provider>
    )
}