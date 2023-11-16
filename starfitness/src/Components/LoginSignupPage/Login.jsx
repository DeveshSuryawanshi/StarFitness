import { Box} from "@chakra-ui/react";
import LoginComp from "./miniComps/LoginComp";
import SigninComp from "./miniComps/SigninComp";
import { useState } from "react";

export default function Login() {

    const [login, setlogin] = useState(true);

    const checklogin = (val) => {
        setlogin(val);
    }

    return (
        <Box>
            {login ? <LoginComp checklogin={checklogin} /> : <SigninComp checklogin={checklogin} />}
        </Box>
    )
}