import { property } from "@/app/constants/data";
import { Box, Card, Container, Flex, Heading } from "@radix-ui/themes";
import React from "react";
import AdminCard from "@/components/ProdcutCard/AdminCard";
import plus from "@/assets/plus.svg";
import Image from "next/image";
import Dailogbox from "@/components/AddNewProperty/Dailogbox";

export default async function Page() {
  return (
    <Box className="min-h-screen w-full">
      <Container>
        <Flex direction={"column"}>
          <Box className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent opacity-40"></Box>
          <Heading align={"center"}>Admin Dashboard</Heading>
          <Box className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-blue-200 to-blue-500"></Box>
          <Flex className="mx-auto w-10vw">
            <Card className="rounded min-h-[200px] md:min-h-[300px] lg:min-h-[200px] max-w-[300px] md:min-w-[200px] lg:max-w-[500px] lg:min-w-[300px] m-5 p-4 shadow-md shadow-slate-700 relative hover:scale-105">
              <Flex
                direction={"column"}
                justify={"between"}
                height={"100%"}
                align={"center"}
              >
                <Image
                  src={plus}
                  alt="add new property"
                  className="w-[100px]"
                />
                <Dailogbox />
              </Flex>
            </Card>
          </Flex>
          <Flex justify={"center"} className="flex-wrap items-center w-full">
            {property.map((item, index) => {
              return (
                <AdminCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  images={item.images}
                />
              );
            })}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
