import { Box, Button, Input, Formik, Field, Text, Toast } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
import { useContext } from "react";
import {AppDataManager} from "../../../App Context/AppContext"
import {useNavigate} from "react-router-dom";


export default function LoginComp({checklogin}) {

    const context = useContext(AppDataManager);
    
    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }

    const [loginData, setLoginData] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e) =>{
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }

    const handlesubmit = () =>{
        context.getdata(loginData);
    }   

    return (
        <Box display={"flex"} justifyContent={"center"} >
            <FormControl padding={5} borderRadius={5} style={{backgroundColor : "whitesmoke", border : "solid gray 1px"}} width={[
                '80%', // 0-30em
                '50%', // 30em-48em
                '40%', // 48em-62em
                '23%', // 62em+
            ]}>
                <Text fontWeight={900}>Login</Text>
                <Box my={5}>
                    <FormLabel>Email address</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Enter Email" type='email' name="email" onChange={(e)=> handleChange(e)} />
                </Box>
                <Box>
                    <FormLabel>Password</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Enter Password" type='paaaword' name="password" onChange={(e)=> handleChange(e)}/>
                </Box>
                <Button onClick={()=>checklogin(false)} style={{backgroundColor : "whitesmoke", textDecoration : "underline"}} mt={5}>New User?</Button>
                <FormHelperText mb={5}>We'll never share your email.</FormHelperText>
                <Button onClick={()=> {
                    handlesubmit()
                    Toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    }} style={{backgroundColor : "black", color : "white"}}>Submit</Button>
            </FormControl>
        </Box>
    )
}
