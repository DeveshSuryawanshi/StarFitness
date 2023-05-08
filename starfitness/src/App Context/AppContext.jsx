import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AppDataManager = createContext();

export default function AppContext({ children }) {

    const navto = useNavigate();

    const [isAuth, setisAuth] = useState(false);

    const getdata = (loginData) => {
        console.log(loginData);
        fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((e) => {
                    if(e.email === loginData.email && e.password === loginData.password){
                        setisAuth(true);
                        navto("/");
                    }
                });
            })
    }



    return (
        <AppDataManager.Provider value={{getdata,isAuth}}>
            {children}
        </AppDataManager.Provider>
    )
}