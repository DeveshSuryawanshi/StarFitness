import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import PostBlog from "./mini-components/PostBlog";
import PostCard from "./mini-components/PostCard";
import { useEffect, useState } from "react";

export default function Blogs() {

    const [blogData, setBlogData] = useState([]);
    const [loading, setloding] = useState(true);

    const getdata = () => {
        fetch(`https://cw-project-rct101.onrender.com/blogs?_sort=date&_order=desc`)
            .then((res) => res.json())
            .then((data) => {
                setBlogData(data);
                setloding(false);
            })
            .catch((Error) => {
                console.log(Error);
                setloding(true);
            })
    }

    const handleChange = (e) => {
        let val = `_sort=date&_order=desc` ;

        if(e.target.value !== ""){
            val = `category=${e.target.value}`
        }
        console.log(e.target.value)
        fetch(`https://cw-project-rct101.onrender.com/blogs?${val}`)
            .then((res) => res.json())
            .then((data) => {
                setBlogData(data);
                setloding(false);
            })
            .catch((Error) => {
                console.log(Error);
                setloding(true);
            })
    }

    useEffect(() => {
        getdata()
    }, [])

    return <Box>
        <Box>
            <PostBlog getdata={getdata}/>
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"}>
            <Box padding={10} style={{ backgroundColor: "whitesmoke" }}>
                <Box >
                    <Text fontWeight={900} style={{ backgroundColor: "black", color: "white", padding: "5px", borderRadius: "5px" }}>
                        Filter by Category
                    </Text>
                    <Select mt={5} placeholder='Select Category' onChange={(e) => handleChange(e)}>
                        <option value='FitnessTips'>Fitness Tip</option>
                        <option value='MentalHealth'>MentalHealth</option>
                        <option value='Nutrition'>Nutrition</option>
                        <option value='HealthTips'>HealthTips</option>
                        <option value='CareerAdvice'>CareerAdvice</option>
                    </Select>
                </Box>
            </Box>
            <Box m={"auto"}>
                {
                    loading ? <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    /> :
                        blogData.map((item) => {
                            return <PostCard {...item} />
                        })
                }
            </Box>
        </Box>
    </Box>
}