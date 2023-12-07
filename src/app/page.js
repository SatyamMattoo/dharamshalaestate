"use client";

import { Box, Flex } from "@radix-ui/themes";
import Hero from "@/components/Hero/Hero";
import Properties from "@/components/Properties/Properties";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Box variant="classic" size={"4"}>
        <Flex
          width={"100%"}
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          className="relative"
        >
          <Hero />
        </Flex>
        <Flex
          width={"100%"}
          justify={"center"}
          align={"center"}
          className="relative"
        >
          <Properties />
        </Flex>
        <Flex
          width={"100%"}
          wrap={"wrap"}
          justify={"center"}
          align={"center"}
          className="relative"
        >
          <Services />
        </Flex>
      </Box>
    </>
  );
}
