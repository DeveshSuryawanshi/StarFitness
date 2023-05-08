import { Box, Button, Container, Flex, Input, Text, useDisclosure } from "@chakra-ui/react";
import style from "./NavBar2.module.css";
import StarFitness from "../AppLogo/StarFitness.png";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

export default function NavBar2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <Box className={style.container1}>
            <Box>
                <img className={style.logo} src={StarFitness} alt="error" width="70px" />
                <Text className={style.logoname}>StarFitness</Text>
            </Box>
            <Box className={style.menu}>
                <GiHamburgerMenu className={style.burger} ref={btnRef} onClick={onOpen} />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>MENU</DrawerHeader>
                        <Input margin={"0px 25px"} width={"270px"} border={"solid black 1px"} placeholder='Search here...' />
                        <Box className={style.contrainer2}>
                            <Box className={style.mini1}>
                                <Link className={style.linkcomp} to="/">Home</Link>
                                <Link className={style.linkcomp} to="/About">About</Link>
                                <Link className={style.linkcomp} to="/Contact">Contact</Link>
                                <Link className={style.linkcomp} to="/Products">Products</Link>
                                <Link className={style.linkcomp} to="/Blogs">Mini Blogs</Link>
                                <Link className={style.linkcomp} to="/Login">Login</Link>
                            </Box>
                        </Box>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}