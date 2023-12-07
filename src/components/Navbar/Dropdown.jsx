"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, IconButton, Link } from "@radix-ui/themes";
import Login from "../Login/Login";
import Register from "../Register/Register";

const DropdownMenuDemo = ({ theme, toggleTheme }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          className={`rounded-full w-[50px] h-[50px] inline-flex items-center justify-center text-blue-500 outline-none hover:bg-violet3 cursor-pointer`}
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`min-w-[150px] ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          } rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade`}
          sideOffset={5}
        >
          <DropdownMenu.Item className="group text-[13px] leading-none text-blue-500 rounded-[3px] flex items-center h-[25px] px-[5px] py-4 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500">
            <Link href="/" className="cursor-pointer ">
              Home
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500">
            <Link
              href="/properties"
              className="cursor-pointer "
            >
              Properties
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500">
            <Link href="/about" className="cursor-pointer ">
              About
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500">
            <Link
              href="/contact"
              className="cursor-pointer"
            >
              Contact
            </Link>
          </DropdownMenu.Item>
          <div className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500">
            <Login />
          </div>
          <div className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer hover:text-white hover:bg-blue-500">
            <Register />
          </div>

          <DropdownMenu.Item
            onClick={toggleTheme}
            className="group text-[13px] leading-none text-blue-500 rounded-[3px] py-4  flex items-center justify-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-blue-700 data-[highlighted]:text-blue-100 cursor-pointer  hover:text-white hover:bg-blue-500"
          >
            <IconButton style={{ cursor: "pointer" }}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </IconButton>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
