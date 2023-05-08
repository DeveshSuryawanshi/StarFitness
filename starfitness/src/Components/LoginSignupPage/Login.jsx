import { Box, Button, Input, Formik, Field, Toast } from "@chakra-ui/react";
import LoginComp from "./miniComps/LoginComp";
import SigninComp from "./miniComps/SigninComp";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'

export default function Login() {

    const [login, setlogin] = useState(true);

    const regis = (val) => {
        setRegister(true);
    }

    const checklogin = (val) => {
        setlogin(val);
    }

    return (
        <Box>
            {login ? <LoginComp checklogin={checklogin} /> : <SigninComp regis={regis} checklogin={checklogin} />}
        </Box>
    )
}