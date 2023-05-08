import { Box, Button, Center, Container, Flex, HStack, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import style from "./Landingpage.module.css";
import { FaRegHandshake } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { TiClipboard } from "react-icons/ti"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Card1 from "./miniComponents/Card1";
import Footer from "./miniComponents/Footer";

export default function Landingpage() {

    return (
        <Box>

            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
                    <Box display={"flex"} alignItems={"center"}>
                        <Box>
                            <Img className={style.image1} src="https://img.freepik.com/free-photo/care-male-healthy-weights-athletic_1139-695.jpg?w=2000" />
                        </Box>
                    </Box>
                    <Box className={style.box1}>
                        <Text className={style.heading1}>Get Certified Trainers</Text>
                        <Text className={style.textContent1}>Get ready to take your fitness game to the next level with our team of certified trainers! Our trainers have undergone extensive education and training in the fitness industry, including certifications from nationally recognized organizations. They are equipped with the knowledge and expertise to help you achieve your fitness goals, whether it's losing weight, building muscle, or improving your overall health and well-being. Join our community of dedicated fitness enthusiasts today and let our certified trainers guide you towards a healthier, happier you!.</Text>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} >
                <Text className={style.heading2} >
                    Plans
                </Text>
            </Box>
            <Box className={style.contgrid}>
                <Box className={style.grid}>
                    <Card className={style.gridItem}>
                        <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <TiClipboard fontSize={"40px"} />
                            <Heading size='md'>Specialised Service</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text >View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button bgColor={"black"} className={style.btn}>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card className={style.gridItem}>
                        <CardHeader display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <FaRegHandshake fontSize={"40px"} />
                            <Heading size='md'>Get Result Online</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button bgColor={"black"} className={style.btn}>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card className={style.gridItem}>
                        <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <AiFillSignal />
                            <Heading size='md'>24/7 Proper Care</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button bgColor={"black"} className={style.btn}>View here</Button>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>
            <Box className={style.container3} >
                <Tabs size='md' variant='enclosed'>
                    <TabList>
                        <Tab className={style.tab} fontWeight={900}>One</Tab>
                        <Tab className={style.tab} fontWeight={900}>Two</Tab>
                        <Tab className={style.tab} fontWeight={900}>Three</Tab>
                        <Tab className={style.tab} fontWeight={900}>Four</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Card1
                                image={"https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg"}
                                head={"Stay Hydrated"}
                                tips={"Whether you're heading off to spin class, boot camp, or any other exercise class, it's always important to hydrate so you can stay energized and have your best workout. But you don't want to grab just anything for hydration purposes."}
                                hide={false}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Card1
                                image={"https://manofmany.com/wp-content/uploads/2021/01/Fitness-Trends-2021-c.jpg"}
                                head={"Find a Workout Buddy"}
                                tips={"A friend you can work out with is very helpful for staying motivated, but it's important to find someone who will inspire—not discourage. So make a list of all your exercise-loving friends, then see who fits this criterion, Andrew Kastor, an ASICS running coach, told Health"}
                                hide={false}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Card1
                                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpRpLDZflkOB8vRMssUeD8EN-c8pvH8b9_tQ&usqp=CAU"}
                                head={"Relieve Those Achy Muscles"}
                                tips={"Many top athletes use this trick to help reduce soreness after training sessions, said Kastor. An athlete training for an important race should consider getting one to two massages per month to help aid in training recovery."}
                                hide={false}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Card1
                                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsykL7pbcOzuvTl3-wOhGV3iIlReUaWvLTX_orU-j5TmdbGL5xzl4Uy36oEC5QQ2_ufD8&usqp=CAU"}
                                head={"Get more tips on our Blogs Posts"}
                                tips={"Visite our blogs page to get more fitness tips and also you can find more Advices realited to your Fitness"}
                                hide={true}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}   