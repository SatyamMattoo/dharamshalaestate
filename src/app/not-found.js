import Link from "next/link";
import { Box, Button, Container, Flex, Heading } from "@radix-ui/themes";

export default function NotFound() {
  return (
    <Box className="w-full h-screen">
      <Flex
        align={"center"}
        direction={"column"}
        justify={"center"}
        height={"100%"}
        gap={"5"}
      >
        <Heading>404 | Page Not Found</Heading>
        <Button className="cursor-pointer">
          <Link href={"/"}>Return Home</Link>
        </Button>
      </Flex>
    </Box>
  );
}
