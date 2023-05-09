import { Box, Heading, Input } from "@chakra-ui/react";
import style from "../ProductsPage/Products.module.css";
import { useEffect, useState } from "react";
import WalkthroughPopover1 from "./miniComps/WalkthroughPopover1";
import FunctionalBar from "./miniComps/FunctionalBar";
import Card from "./miniComps/Cards";
import { Spinner } from '@chakra-ui/react';

export default function Products() {

    const [productdata, setProductData] = useState([]);
    const [loding, setloding] = useState(true);

    const getdata = (val) => {

        let url;
        if (val === "Asc") {
            url = `https://cw-project-rct101.onrender.com/products?_sort=title&_order=asc`;
        } else if (val === "Dec") {
            url = `https://cw-project-rct101.onrender.com/products?_sort=title&_order=desc`;
        } else if (val === "lowtohigh") {
            url = `https://cw-project-rct101.onrender.com/products?_sort=price&_order=asc`;
        } else if (val === "hightolow") {
            url = `https://cw-project-rct101.onrender.com/products?_sort=price&_order=desc`;
        } else if (val === "Micronutrients" || val === "equipment") {
            url = `https://cw-project-rct101.onrender.com/products?category=${val}`;
        } else if (val === "GainerCreatine") {
            url = `https://cw-project-rct101.onrender.com/products?category=Gainer&category=Creatine`;
        } else {
            url = `https://cw-project-rct101.onrender.com/products`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data)
                setloding(false);
            })
            .catch((error) => {
                console.log(error)
                setloding(true)
            })
    }

    function getSort(val) {
        getdata(val);
    }

    const search = (e) => {
        fetch(`https://cw-project-rct101.onrender.com/products?q=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => setProductData(data))
            .catch((error)=> console.log(error))
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <Box>
            <Box style={{ backgroundColor: "whitesmoke", padding: "20px" }}>
                <Heading>
                    Find Your Need
                    <Input placeholder='Search here' type="Search" backgroundColor={"white"} onChange={(e) => search(e)} />
                </Heading>
            </Box>
            <Box display={"flex"} justifyContent={"flex-start"}>
                <Box>
                    <FunctionalBar getSort={getSort} />
                </Box>
                <Box m={"auto"}>
                    {
                        loding ? <Spinner
                        m={"auto"}
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                      /> : productdata.map((item, i) => {
                            return <Card {...item} />
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}


