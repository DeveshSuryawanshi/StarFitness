import { Box, Button, Input, Formik, Field, Text } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";

const obj = {
    username: "",
    email: "",
    password: ""
}


export default function SigninComp({ checklogin }) {

    const breakpoints = {
        sm: '30em', // 480px
        md: '48em', // 768px
        lg: '62em', // 992px
        xl: '80em', // 1280px
        '2xl': '96em', // 1536px
    }

    const [userData, setUserData] = useState(obj);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const PostData = (userData) => {
        fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                checklogin(true)
            })
    }

    const handleSubmit = () => {
        PostData(userData);
    }

    return (
        <Box display={"flex"} justifyContent={"center"} >
            <FormControl padding={5} borderRadius={5} style={{ backgroundColor: "whitesmoke", border: "solid gray 1px" }} width={[
                '80%', // 0-30em
                '50%', // 30em-48em
                '40%', // 48em-62em
                '23%', // 62em+
            ]}>
                <Text fontWeight={900}>Signup</Text>
                <Box my={5}>
                    <FormLabel>Email address</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Enter Email" type='email' name="email" onChange={(e) => handleChange(e)} />
                </Box>
                <Box my={5}>
                    <FormLabel>Username</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Create Username" type='text' name="username" onChange={(e) => handleChange(e)} />
                </Box>
                <Box>
                    <FormLabel>Create Password</FormLabel>
                    <Input backgroundColor={"white"} placeholder="Create new Password" type='paaaword' name="password" onChange={(e) => handleChange(e)} />
                </Box>
                <Button onClick={() => checklogin(true)} style={{ backgroundColor: "whitesmoke", textDecoration: "underline" }} mt={5}>Allready a User?</Button>
                <FormHelperText mb={5}>We'll never share your email.</FormHelperText>
                <Button onClick={handleSubmit} style={{ backgroundColor: "black", color: "white" }}>Register</Button>
            </FormControl>
        </Box>
    )
}
