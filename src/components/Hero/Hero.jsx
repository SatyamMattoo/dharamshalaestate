import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

const hero = () => {
  return (
    <>
      <Box className="w-screen h-[60vh] opacity-60 hero" />
      <Container
        direction={"column"}
        align={"start"}
        justify={"center"}
        m={"4"}
        p={"4"}
        className="absolute flex-col md:flex-row justify-center md:justify-between"
      >
        <Flex gap={"4"} className="w-full h-full ">
          <Flex
            direction={"column"}
            justify={"between"}
            align={"start"}
            gap={"4"}
            className="w-1/2"
          >
            <Heading size={"6"} weight={"bold"}>
              We are your Trusted Partner for Buying Properties in Dharamshala,
              H.P.
            </Heading>
            <Text
              className="text-start hidden md:block"
              weight={"light"}
              color="gray"
            >
              At Dharamshala Estate, we are your dedicated real estate agency,
              specializing in residential properties. Our array of services
              includes property management, real estate sales, and expert
              consultancy.
            </Text>
            <Flex direction={"row"} justify={"space-between"} mt={"3"}>
              <Button size={"2"}>Buy Properties</Button>
            </Flex>
          </Flex>
          <Flex
            direction={"column"}
            justify={"between"}
            align={"start"}
            gap={"4"}
            className="w-1/2"
          >
            <Heading size={"6"} weight={"bold"}>
              List Your Property for Free: Simplifying Real Estate Sales
            </Heading>
            <Text
              className="text-start hidden md:block"
              weight={"light"}
              color="gray"
            >
              Discover the hassle-free way to list your properties, whether it's
              plots, homes, or rentals, at Dharamshala Estate. Our platform
              offers a straightforward and speedy solution to sell your assets
              at a price you set. Get started today!
            </Text>
            <Flex direction={"row"} justify={"space-between"} mt={"3"}>
              <Button size={"2"}>Sell Properties</Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default hero;
