import { Box, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import ForgotPassForm from "./ForgotPassForm";

export default function page() {
  return (
    <Box className="h-screen ">
      <Flex justify={"center"} align={"center"} m={"9"}>
        <div className=" m-4 py-4 rounded-[20px]  md:w-3/4 lg:w-1/3 border border-slate-600">
          <Heading align={"center"} m={"3"}>
            Enter Your Registered Email
          </Heading>
          <ForgotPassForm />
        </div>
      </Flex>
    </Box>
  );
}
