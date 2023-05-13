import { Avatar, Box, Flex, Stack, Text, WrapItem } from "@chakra-ui/react";
import StarFitness from "../AppLogo/StarFitness.png";
import { Link } from "react-router-dom";
import style from "./NavBar1.module.css";
import { AppDataManager } from "../../../App Context/AppContext";
import { useContext } from "react";

export default function NavBar1() {

    const context = useContext(AppDataManager);

    return (
        <Box>
            <Flex justifyContent="space-between" margin="20px 50px">
                <Box>
                    <Box>
                        <img src={StarFitness} alt="error" width="100px" />
                        <Text className={style.logoname}>StarFitness</Text>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <Link className={style.linkcomp} to="/">Home</Link>
                    <Link className={style.linkcomp} to="/About">About</Link>
                    <Link className={style.linkcomp} to="/Contact">Contact</Link>
                    <Link className={style.linkcomp} to="/Products">Products</Link>
                    <Link className={style.linkcomp} to="/Blogs">Mini Blogs</Link>
                </Box>
                <Box display="flex" alignItems="center">
                    {context.isAuth ? <Stack direction='column'>
                        <Avatar margin={"auto"} display={"block"} name='Oshigaki Kisame' backgroundColor={"tomato"} src={context.user.image}/>
                        <Text>{context.user.username}</Text>
                        </Stack> : <Link className={style.login} to="/Login">Login</Link>
                        }
                </Box>
            </Flex>
        </Box>
    )
}   