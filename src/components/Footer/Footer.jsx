import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import {
  BiHome,
  BiLogoFacebook,
  BiLogoGmail,
  BiLogoInstagram,
  BiPhone,
} from "react-icons/bi";

const footer = () => {
  return (
    <footer className="p-4 text-sm mt-6 shadow-xl shadow-gray-500">
      <Box>
        <Flex justify={"between"} mx={"7"}>
          <Image
            src={logo}
            width={100}
            height={100}
            className="hidden md:block"
          />
          {/* Contact */}
          <Flex direction={"column"} align={"start"} gap={"2"}>
            <Flex align={"center"} justify={"center"} gap={"2"}>
              <BiPhone />
              <p className="font-light">+91 7876740985</p>
            </Flex>
            <Flex align={"center"} justify={"center"} gap={"2"}>
              <BiLogoGmail />
              <p className=" font-light">sample@gmail.com</p>
            </Flex>
          </Flex>
          {/* Socials */}
          <Flex direction={"column"} align={"start"} gap={"2"}>
            <a
              className="font-light"
              href="https://www.instagram.com"
              rel="noopenner noreferrer"
            >
              <Flex align={"center"} justify={"center"} gap={"2"}>
                {" "}
                <BiLogoInstagram />
                <p className="mx-2"> Instagram</p>
              </Flex>
            </a>
            <a
              className="font-light"
              href="https://www.facebook.com"
              rel="noopenner noreferrer"
            >
              <Flex align={"center"} justify={"center"} gap={"2"}>
                {" "}
                <BiLogoFacebook />
                <p className="mx-2">Facebook</p>
              </Flex>
            </a>
          </Flex>
          {/* Address  */}
          <Flex
            direction={"row"}
            align={"center"}
            justify={"center"}
            className="hidden md:block"
          >
            <BiHome />
            <p className="mx-2 font-light">
              Dharamshala, Kangra
              <br />
              Himachal Pradesh, India
            </p>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};

export default footer;
