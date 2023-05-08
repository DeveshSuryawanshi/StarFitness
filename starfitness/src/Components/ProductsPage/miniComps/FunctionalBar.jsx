import { Box, Button, Select, Text } from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

export default function FunctionalBar({getSort}) {
    return (
        <Box style={{ backgroundColor: "whitesmoke" }}>
            <Box padding={19}>
                <Text fontWeight={900} fontSize={20}>
                    Sort by Name
                </Text>
                <Box display={'flex'} flexDirection={"column"}>
                    <Button onClick={(e)=>getSort("Asc")} display={"block"} style={{ backgroundColor: "black", color: "white", margin: "5px" }}>Ascending</Button>
                    <Button onClick={(e)=>getSort("Dec")} display={"block"} style={{ backgroundColor: "black", color: "white", margin: "5px" }}>Descending</Button>
                </Box>
                <Text fontWeight={900} fontSize={20} mt={5}>
                    Sort by Price
                </Text>
                <Box style={{ backgroundColor: "black", color: "white", margin: "5px", padding: "10px", borderRadius: "5px" }}>
                    <Checkbox onChange={(e)=> e.target.checked ? getSort("lowtohigh") : null} display={"block"} style={{ backgroundColor: "black", color: "white", padding: "10px" }} >Low to High</Checkbox>
                    <Checkbox onChange={(e)=> e.target.checked ? getSort("hightolow") : null} display={"block"} style={{ backgroundColor: "black", color: "white", padding: "10px" }} >High to Low</Checkbox>
                </Box>
            </Box>
            <Box padding={15}>
                <Text fontWeight={900} fontSize={20}>
                    Filter
                </Text>
                <Select placeholder='Select option' onChange={(e)=>getSort(e.target.value)}>
                    <option value='GainerCreatine'>Suppliments</option>
                    <option value='Micronutrients'>Micronutrients</option>
                    <option value='equipment'>Equipment</option>
                </Select>
            </Box>
        </Box>
    )
}