import { Box, Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from "@chakra-ui/react"
import { useRef } from "react"

export default function WalkthroughPopover1() {
    const initialFocusRef = useRef()
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button style={{width : "200px", backgroundColor:"black", color : "white"}}>Sort</Button>
        </PopoverTrigger>
        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
          <PopoverHeader pt={4} fontWeight='bold' border='0'>
            Manage Your Channels
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
          >
            <Box fontSize='sm'>Step 2 of 4</Box>
            <ButtonGroup size='sm'>
              <Button colorScheme='green'>Setup Email</Button>
              <Button colorScheme='blue' ref={initialFocusRef}>
                Next
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }