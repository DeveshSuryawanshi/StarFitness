import { useMediaQuery,Box } from "@chakra-ui/react"
import NavBar1 from "./NavBar1/NavBar1"
import NavBar2 from "./NavBar2/NavBar2"

export default function NavigationBar(){

    const [midScreenSize] = useMediaQuery("(min-width: 816px)");

    return(
        <Box>
            {
                midScreenSize ? <NavBar1/> : <NavBar2/>
            }
        </Box>
    )
}