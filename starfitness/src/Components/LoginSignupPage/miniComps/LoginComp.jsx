import { Box, Button, Input, Text } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
import { useContext } from "react";
import {AppDataManager} from "../../../App Context/AppContext"


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
            <FormControl padding={5} borderRadius={5} width={[
                '80%', // 0-30em
                '50%', // 30em-48em
                '40%', // 48em-62em
                '23%', // 62em+
            ]} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
                <Text fontWeight={900} fontSize={"20px"} mb={"30px"}>Login</Text>
                <Box my={5}>
                    <FormLabel>Email address</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Enter Email" type='email' name="email" onChange={(e)=> handleChange(e)} />
                </Box>
                <Box>
                    <FormLabel>Password</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Enter Password" type='paaaword' name="password" onChange={(e)=> handleChange(e)}/>
                </Box>
                <Button onClick={()=>checklogin(false)} bg={"white"} style={{textDecoration : "underline"}} mt={5}>New User?</Button>
                <FormHelperText mb={5}>We'll never share your email.</FormHelperText>
                <Button w={"100%"} onClick={handlesubmit} style={{backgroundColor : "black", color : "white"}}>Submit</Button>
            </FormControl>
        </Box>
    )
}
