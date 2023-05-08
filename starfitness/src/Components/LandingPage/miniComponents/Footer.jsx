import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import style from "./Footer.module.css"
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa"
import { BsPinterest } from "react-icons/bs";
import { BsTwitch } from "react-icons/bs";
// import StarFitness from "../AppLogo/StarFitness.png";
import StarFitness from "../../NavigationBar/AppLogo/StarFitness.png";

export default function Footer() {
    return (
        <Box className={style.contaiuner}>
            <Box className={style.mini} display={"flex"} justifyContent={"space-between"}>
                <VStack>
                    <img className={style.image} src={StarFitness} alt="error" />
                    <Text className={style.heading1}>StarFitness.com</Text>
                    <Text className={style.textColor} >Become A Star with your Fitness With us</Text>
                </VStack>
                <Box display={"flex"} flexDirection={"column"} flex={"start"} mt={"40px"}>
                    <Text className={style.textColor} textAlign={"start"} >Buy Equipments</Text>
                    <Text className={style.textColor} textAlign={"start"} >Buy Fitness Products</Text>
                    <Text className={style.textColor} textAlign={"start"} >Get A online meet Professinol</Text>
                    <Text className={style.textColor} textAlign={"start"} >Get Advise From Advanced Coach</Text>
                    <Text className={style.textColor} textAlign={"start"} >Blogs</Text>
                    <Text className={style.textColor} textAlign={"start"} >Get fitness Tips</Text>
                </Box>
                <Box>
                    <Flex mt={"30px"}>
                        <AiFillInstagram className={style.socialLogo} />
                        <BsFacebook className={style.socialLogo} />
                        <FaTwitterSquare className={style.socialLogo} />
                        <BsPinterest className={style.socialLogo} />
                        <BsTwitch className={style.socialLogo} />
                    </Flex>
                    <Box>
                        <Text className={style.textColor} >Follow Our updates from Social community</Text>
                    </Box>
                </Box>
            </Box>
            <VStack>
                <p className={style.textColor} >© 2023 StarFitness.com, Inc.</p>
            </VStack>
        </Box>
    )
} 