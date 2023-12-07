import React from "react";
import Card from "@/components/ProdcutCard/Card";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { property } from "../constants/data";

export default function Page() {
  return (
    <Box className="mt-20 min-h-screen">
      <Container>
        <Flex direction={"column"}>
          <Box className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent opacity-40"></Box>
          <Heading className="text-center" size={"7"} weight={"medium"}>
            Properties For Sale
          </Heading>
          <Box className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-blue-200 to-blue-500"></Box>
        </Flex>
        <Flex justify={"center"} className="flex-wrap items-center w-full">
          {property.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                description={item.description}
                images={item.images}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
