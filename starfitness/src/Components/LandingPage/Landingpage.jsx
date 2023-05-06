import { Box, Button, Container, HStack, Heading, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import style from "./Landingpage.module.css"


export default function Landingpage() {

    return (
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Box className={style.hstack}>
                <Box className={style.box1}>
                    <Text className={style.heading1}>Come Train With Us</Text>
                    <Text className={style.textContent1}>The StarFitness Training Club App helps you reach your fitness goals with expertly designed workouts from our world-class StarFitness Master Trainers. NTC is perfect for training at home, in the gym or on the road, with everything from bodyweight-only to full-equipment workouts for everyone at all fitness levels.</Text>
                    <Box className={style.LinkComp}>
                        <Link to="/Products">Get Exlusive Deals on fitness Products</Link>
                    </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <Box>
                        <Img src='https://assets.gqindia.com/photos/61a320bc0cb715e3116b8655/16:9/pass/weekend%20workout.jpg' className={style.image1} alt="Error" />
                    </Box>
                </Box>
            </Box>
            <Box className={style.hstack}>
                <Box>
                    <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52H1_28mWY8rvZvOd75YzWRJmdhRlfnX3dg&usqp=CAU" />
                </Box>
                <Box>
                    <Text className={style.heading1}>Come Train With Us</Text>
                    <Text className={style.textContent1}>The StarFitness Training Club App helps you reach your fitness goals with expertly designed workouts from our world-class StarFitness Master Trainers. NTC is perfect for training at home, in the gym or on the road, with everything from bodyweight-only to full-equipment workouts for everyone at all fitness levels.</Text>
                </Box>
            </Box>
        </Box>
    )
}   