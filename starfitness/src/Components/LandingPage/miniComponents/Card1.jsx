import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Button, Image, Heading } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'

export default function Card1({image,head,tips,hide}) {
    return (
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
                <CardBody>
                    <Heading size='md'>{head}</Heading>

                    <Text py='2'>
                        {tips}
                    </Text>
                </CardBody>

                <CardFooter>
                    {hide ? <Button onClick={(e)=><Navigate to="/Blogs"/>} variant='solid' colorScheme='blackAlpha' color={"black"}>
                        Visite now
                    </Button> : null}
                </CardFooter>
            </Stack>
        </Card>
    )
}