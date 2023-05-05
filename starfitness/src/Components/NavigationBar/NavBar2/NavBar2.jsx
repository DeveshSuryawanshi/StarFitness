import { Box, Button, Container, Text, useDisclosure } from "@chakra-ui/react";
import style from "./NavBar2.module.css";
import StarFitness from "../AppLogo/StarFitness.png";
import { useRef } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
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
                <GiHamburgerMenu className={style.burger} ref={btnRef} onClick={onOpen}/>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}