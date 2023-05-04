import { Box, Flex, Stack, Text, WrapItem } from "@chakra-ui/react";
import StarFitness from "../AppLogo/StarFitness.png";
import { Link } from "react-router-dom";
import style from "./NavBar1.module.css";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export default function NavBar1() {

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
                    <Link className={style.linkcomp} to="/Blogs">Blogs</Link>
                </Box>
                <Box display="flex" alignItems="center">
                    <Link className={style.login} to="/Login">Login</Link>
                </Box>
            </Flex>
        </Box>
    )
}   