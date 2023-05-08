import { Box, Button, CardBody, CardFooter, Heading, Image, Stack, Text, Card } from "@chakra-ui/react";
import WalkthroughPopover1 from "./WalkthroughPopover1";

export default function Cards ({title,description,image,category,price}) {
    return (
        <Box mt={8} ml={10}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={image}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody p={2}>
                        <Heading size='md'>{title}</Heading>

                        <Text py='2'>
                            {description}
                        <Text fontSize={18} m={4} fontWeight={900}> Price:- {price}</Text>
                        </Text>
                    </CardBody >

                    <CardFooter padding={2}>
                        <Button variant='solid' colorScheme='blue'>
                            Buy 
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Box>
    )
}