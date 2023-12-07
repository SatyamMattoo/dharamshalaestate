"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Box, Button, Flex, IconButton, Text } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import Dropdown from "./Dropdown";
import Login from "../Login/Login";
import Register from "../Register/Register";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const session = useSession();

  
  const role = session.data?.user.role;
  console.log("session", session);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const logOut = async () => {
    try {
      await signOut();
      toast.success("Logged Out!");
    } catch (error) {
      console.log(error);
      toast.error("Some error while loggin out! Please try again later.");
    }
  };

  return (
    <>
      <Box className="flex px-10 py-5 ml-8 ">
        <Flex
          align={"center"}
          justify={"between"}
          direction="row"
          className="text-gray-900 text-base md:text-xl lg-text-2xl w-full"
        >
          <div className="hidden text-blue-500 lg:flex gap-10 items-center justify-start w-full">
            <Link href="/" className="cursor-pointer hover:text-blue-500">
              <Text className="text-shadow">Home</Text>
            </Link>
            <Link
              href="/properties"
              className="cursor-pointer hover:text-blue-700"
            >
              <Text className="text-shadow">Properties</Text>
            </Link>
            <Link href="/about" className="cursor-pointer hover:text-blue-700">
              <Text className="text-shadow">About</Text>
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer hover:text-blue-700 "
            >
              <Text className="text-shadow">Contact</Text>
            </Link>
          </div>

          <Image src={logo} width={170} alt="logo" priority={true} />

          <div className="block lg:hidden">
            <Dropdown theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="hidden lg:flex w-full justify-end">
            <Flex
              gap={"4"}
              justify={"end"}
              align={"center"}
              p={"2"}
              className="shadow-slate-700 rounded-lg "
            >
              {session.data ? (
                <Button
                  size={"2"}
                  onClick={logOut}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Login />
                  <Register />
                </>
              )}
              {role==="Admin" ? (
                <Link
                  href="/admin/dashboard"
                  className="cursor-pointer hover:text-blue-700 "
                >
                  <Button size={"2"} style={{ cursor: "pointer" }}>
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <></>
              )}
              <IconButton
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
                size={"2"}
              >
                {theme === "light" ? <MoonIcon color="black" /> : <SunIcon />}
              </IconButton>
            </Flex>
          </div>
        </Flex>
      </Box>
    </>
  );
}
