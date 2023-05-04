import { Box, Button, HStack, Heading, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import style from "./Landingpage.module.css"


export default function Landingpage() {

    return (
        <Box display={"flex"} justifyContent={"center"}>
            <HStack width={"90%"} display={"flex"} justifyContent={"space-between"}>
                <Box className={style.box1}>
                    <Heading className={style.heading1}>Come Train With Us</Heading>
                    <Text>The StarFitness Training Club App helps you reach your fitness goals with expertly designed workouts from our world-class StarFitness Master Trainers. NTC is perfect for training at home, in the gym or on the road, with everything from bodyweight-only to full-equipment workouts for everyone at all fitness levels.</Text>
                    <Box>
                        <Link className={style.LinkComp} to={"/Products"}>Get Exlusive Deals on fitness Products</Link>
                    </Box>
                </Box>
                <Box boxSize='sm'>
                    <Img src='https://assets.gqindia.com/photos/61a320bc0cb715e3116b8655/16:9/pass/weekend%20workout.jpg' borderRadius={"20px"} width="600px" alt="Error" />
                </Box>
            </HStack>
        </Box>
    )
}   