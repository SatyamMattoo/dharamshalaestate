import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import logo from "../../assets/sample.jpg";
import myImg from "../../assets/myImg.png";

export default function Page() {
  return (
    <Box className="flex items-center justify-center min-h-screen">
      <Container variant="classic" width={"100%"}>
        <Heading size={"8"} align={"center"} my={"9"}>
          About Us
        </Heading>
        <Flex my={"9"}>
          <Flex direction={"column"} className="w-full md:w-1/2">
            <Heading size={"5"} mx="2">
              Your Pathway to Legal Confidence in Real Estate: Dharamshala
              Estate
            </Heading>
            <Text m={"2"} className="text-start" weight={"light"} color="gray">
              Welcome to Dharamshala Estate, your trusted partner for navigating
              the world of real estate. Our commitment to providing seamless and
              legally sound real estate transactions sets us apart. Discover
              <br />
              <b>Hassle-Free Real Estate:</b> Our mission is to make your real
              estate journey as smooth as possible. With a decade of experience,
              Mr. Jai Rana leads our team of experts, ensuring that you receive
              sound legal advice every step of the way.
              <br />
              <b>Legal Assurance, Your Peace of Mind: </b>We understand the
              complexities of buying or selling properties, and that's why we
              emphasize the legal aspect. Our legal expertise guarantees that
              each client benefits from expert advice, making your estate
              purchase not just a wise investment, but a legally secure one.
              <br />
              <b>Explore Dharamshala with Confidence:</b> Beyond legal
              expertise, we invite you to explore the breathtaking natural
              wonders of Dharamshala, knowing that you have a partner dedicated
              to your success. At Dharamshala Estate, we're here to make your
              real estate experience remarkable, backed by the assurance of
              legal confidence.
            </Text>
          </Flex>
          <Box className="w-1 mx-8 bg-gradient-to-br from-violet-500 via-blue-500 to-violet-500"></Box>
          <Image
            src={logo}
            alt=""
            width={500}
            height={300}
            className="hidden md:block"
          />
        </Flex>
        <Flex my={"9"}>
          <Image
            src={myImg}
            alt=""
            width={500}
            height={300}
            className="hidden md:block"
          />
          <Box className="w-1 mx-8 bg-gradient-to-br from-violet-500 via-blue-500 to-violet-500"></Box>
          <Flex direction={"column"} className="w-full md:w-1/2">
            <Heading size={"5"} mx="2">
              Experience Legal Confidence with Mr. Jai Rana: Your Real Estate
              Ally
            </Heading>
            <Text m={"2"} className="text-start" weight={"light"} color="gray">
              Allow us to introduce you to the accomplished Mr. Jai Rana, a
              seasoned advocate whose unwavering commitment and visionary
              expertise make your dream real estate project a reality. With a
              rich background spanning nearly a decade in the real estate
              industry, Mr. Rana is your steadfast guide to accessible and
              secure real estate transactions.
              <br />
              <br />
              Mr. Rana's legal acumen ensures that every client receives
              comprehensive and sound legal advice, underscoring the fairness
              and legality of each estate purchase. At Dharamshala Real Estate,
              we are devoted to providing you with the assurance of making not
              just a wise investment but a legally sound one.
              <br />
              <br />
              While partnering with us, you'll be perfectly positioned to
              explore the natural wonders of Dharamshala, a locale celebrated
              for its breathtaking landscapes and serene beauty. The incredible
              real estate opportunities awaiting you here are yours to seize,
              and Mr. Jai Rana is your guiding light. Trust in our expertise,
              and let us turn your real estate dreams into a captivating reality
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
