import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const UserDataContext = createContext();

const UserContext = ({children}) =>{
    const [user,setUser] = useState({
        email: "",
        fullname:"",
        role:""
    })

    return (
        <UserDataContext.Provider value={{user,setUser}}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserContext;