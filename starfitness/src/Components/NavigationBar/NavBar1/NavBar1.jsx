import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import StarFitness from "../AppLogo/StarFitness.png";
import { Link } from "react-router-dom";
import style from "./NavBar1.module.css";
import { AppDataManager } from "../../../App Context/AppContext";
import { useContext, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useToast } from '@chakra-ui/react';

export default function NavBar1() {
  const context = useContext(AppDataManager);
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const isAuth = localStorage.getItem("isAuth");
  const toast = useToast()

  useEffect(() => {
    setImage(localStorage.getItem("image"));
    setUsername(localStorage.getItem("username"));
  }, [isAuth,image]);

  const handleLogout = () =>{
    localStorage.clear();
    toast({
        title: 'Logout Successfull',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    setImage("");
  }

  return (
    <Box>
      <Flex justifyContent="space-between" margin="20px 50px">
        <Box>
          <Box>
            <img src={StarFitness} alt="error" width="100px" />
            <Text className={style.logoname}>StarFitness</Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Link className={style.linkcomp} to="/">
            Home
          </Link>
          {/* <Link className={style.linkcomp} to="/About">
            About
          </Link> */}
          {/* <Link className={style.linkcomp} to="/Contact">
            Contact
          </Link> */}
          <Link className={style.linkcomp} to="/Products">
            Products
          </Link>
          <Link className={style.linkcomp} to="/Blogs">
            Mini Blogs
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          {isAuth ? (
            <Box display={"flex"} alignItems={"center"} gap={"20px"}>
              <BiLogOut fontSize={"30px"} onClick={handleLogout}/>
              <Box>
                <Avatar
                  margin={"auto"}
                  display={"block"}
                  name="Oshigaki Kisame"
                  backgroundColor={"tomato"}
                  src={image}
                />
                <Text fontSize={"10px"}>{username}</Text>
              </Box>
            </Box>
          ) : (
            <Link className={style.login} to="/Login">
              Login
            </Link>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
