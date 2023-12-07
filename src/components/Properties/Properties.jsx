import React from "react";
import Card from "../ProdcutCard/Card";
import { Box, Container, Flex, Heading, Section } from "@radix-ui/themes";
import { property } from "@/app/constants/data";

const properties = () => {
  return (
    <Box className="mt-20 min-h-screen w-screen">
      <Container>
        <Flex direction={"column"}>
          <Box className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent opacity-40"></Box>
          <Heading className="text-center" size={"7"} weight={"medium"}>
            Properties For Sale
          </Heading>
          <Box className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-blue-200 to-blue-500"></Box>
        </Flex>
        <Flex justify={"center"} className="flex-wrap items-center w-full flex justify-center">
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
};

export default properties;
