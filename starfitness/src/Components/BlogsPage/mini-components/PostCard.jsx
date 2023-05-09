import { Avatar, Box, Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {BiLike, BiChat, BiShare} from "react-icons/bi"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useContext } from "react";
import { AppDataManager } from "../../../App Context/AppContext";

export default function PostCard({title,description,authorImage,category,author}) {

    const context = useContext(AppDataManager);

    return (
        <Box mt={5}>
            <Card maxW='md'>
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name='Segun Adebayo' src={authorImage} />

                            <Box>
                                <Heading size='sm'>{author}</Heading>
                                <Text>{title}</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                       {description}
                    </Text>
                </CardBody>
                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                        Like
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                        Comment
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                        Share
                    </Button>
                </CardFooter>
            </Card>
        </Box>
    )
}