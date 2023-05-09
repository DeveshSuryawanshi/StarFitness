import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Input, Select, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { AppDataManager } from "../../../App Context/AppContext";
import { useContext } from "react";

export default function PostBlog({getdata}) {

    const context = useContext(AppDataManager);

    const [postData, setpostData] = useState({
        "title": "",
        "category": "",
        "description": "",
        "author": context.user.username,
        "authorImage": context.user.image,
        "date": ""
    });

    const handlePost = (e) => {
        e.preventDefault();

        fetch(`https://cw-project-rct101.onrender.com/blogs`, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        })
          .then((res) => res.json())
          .then((data) => {
              getdata();
          })

        e.target.reset();
    }

    return (
        <Box>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Make a blog Post
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <form action="" onSubmit={(e) => handlePost(e)}>

                        <AccordionPanel pb={4}>
                            <Box>
                                <Input m={3} placeholder='title' type="text" name="title" onChange={(e) => setpostData({ ...postData, title: e.target.value })} />
                                <Input ml={3} type="Date" placeholder="Enter Date" onChange={(e) => setpostData({ ...postData, date: e.target.value })} />
                            </Box>
                            <Box>
                                <Select ml={3} mt={3} placeholder='Select Category' onChange={(e) => setpostData({ ...postData, category: e.target.value })}>
                                    <option value='FitnessTips'>Fitness Tip</option>
                                    <option value='MentalHealth'>MentalHealth</option>
                                    <option value='Nutrition'>Nutrition</option>
                                    <option value='HealthTips'>HealthTips</option>
                                    <option value='CareerAdvice'>CareerAdvice</option>
                                </Select>
                                <Box>
                                    <Textarea m={3} height={100} placeholder='Description' onChange={(e) => setpostData({ ...postData, description: e.target.value })} />
                                </Box>
                            </Box>
                            <Box>
                                <Button type="submit" style={{ backgroundColor: "black", color: "white" }}>Post</Button>
                            </Box>
                        </AccordionPanel>
                    </form>
                </AccordionItem>
            </Accordion>
        </Box>
    )
} 