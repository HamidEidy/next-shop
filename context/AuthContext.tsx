'use client'

import { createContext, useEffect, useState } from "react";
import { me } from "@/actions/login";

const AuthContext = createContext({});


export const AuthProvider = ({children}:any) =>{
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            const data = await me();
            if (data?.error) {
                setUser(null)
            } else {
                setUser(data.user)
            }
        }

        checkUserLoggedIn();
    }, [])
    const loginContext = (user:any) => {
        setUser(user)
        console.log('context : ',user);
        
    }
    return(
        <AuthContext.Provider value={{user, loginContext}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;