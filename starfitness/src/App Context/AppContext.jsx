import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AppDataManager = createContext();

export default function AppContext({ children }) {

    const navto = useNavigate();

    const [isAuth, setisAuth] = useState(false);
    const [user, setuser] = useState({
        username : "",
        image : "",
    })

    const getdata = (loginData) => {
        console.log(loginData);
        fetch(`https://cw-project-rct101.onrender.com/users`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((e) => {
                    if(e.email === loginData.email && e.password === loginData.password){
                        setisAuth(true);
                        navto("/");
                        setuser({...user, username : e.username, image : e.image})
                    }
                });
            })
    }



    return (
        <AppDataManager.Provider value={{getdata,isAuth,user}}>
            {children}
        </AppDataManager.Provider>
    )
}