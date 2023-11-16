import { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

export const AppDataManager = createContext();

export default function AppContext({ children }) {

    const navto = useNavigate();
    const toast = useToast();

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
                        toast({
                            title: 'Login Successfull.',
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                          })
                        localStorage.setItem("isAuth", isAuth);
                        localStorage.setItem("image", e.image);
                        localStorage.setItem("username", e.username);
                        navto("/");
                        setuser({...user, username : e.username, image : e.image})
                    }
                });
            })
            .catch((err)=>{
                toast({
                    title: 'Login failed',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
            })
    }



    return (
        <AppDataManager.Provider value={{getdata,isAuth,user}}>
            {children}
        </AppDataManager.Provider>
    )
}