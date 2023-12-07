import React from "react";
import { Box, Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { services } from "@/app/constants/data";

const Services = () => {
  return (
    <Box my={"8"}>
      <Container>
        <Flex direction={"column"}>
          <Box className="h-1 w-1/2 mx-8 my-4 bg-gradient-to-r from-blue-500 via-blue-200 to-transparent opacity-40"></Box>
          <Heading className="text-center" size={"7"} weight={"medium"}>
            Services We Provide
          </Heading>
          <Box className="w-1/2 h-1 mx-8 my-4 self-end bg-gradient-to-r from-transparent via-blue-200 to-blue-500"></Box>
        </Flex>
        <Flex justify={"center"} className="flex-wrap items-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded min-h-[200px] md:min-h-[300px] lg:min-h-[300px] max-w-[300px] m-5 p-4 shadow-md shadow-slate-700 relative hover:scale-105"
            >
              <Flex
                direction={"column"}
                justify={"between"}
                align={"start"}
                gap={"5"}
              >
                <Heading className="text-start text-blue-500" weight={"bold"}>
                  {service.title}
                </Heading>
                <Text weight={"light"} color="gray">
                  {service.description}
                </Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
