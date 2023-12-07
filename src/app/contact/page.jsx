"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
} from "@radix-ui/themes";
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Box className="h-screen ">
      <Flex justify={"center"} align={"center"} m={"9"}>
        <div className=" m-4 py-4 rounded-[20px] w-full md:w-3/4 lg:w-1/2 border border-slate-600">
          <Heading align={"center"} m={"3"}>
            Contact us
          </Heading>
          <div className="p-6 mx-auto max-w-screen-lg">
            <form action="#" onSubmit={submitHandler} className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="shadow-sm outline-none text-sm rounded-lg  block w-full p-2.5 border border-slate-400"
                  placeholder="name@flowbite.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium ">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="shadow-sm outline-none text-sm rounded-lg  block w-full p-2.5 border border-slate-400"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="shadow-sm outline-none text-sm rounded-lg  block w-full p-2.5 border border-slate-400"
                  placeholder="Leave a comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <Button>Send message</Button>
            </form>
          </div>
        </div>
      </Flex>
    </Box>
  );
}
