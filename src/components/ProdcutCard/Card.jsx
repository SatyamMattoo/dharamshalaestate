import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";

const card = ({ name, description, images, title }) => {
  return (
    <Card className="rounded min-h-[200px] md:min-h-[300px] lg:min-h-[200px] max-w-[300px] md:min-w-[200px] lg:max-w-[500px] lg:min-w-[300px] m-5 p-4 shadow-md shadow-slate-700 relative hover:scale-105">
      <Flex direction={"column"} justify={"between"} align={"start"} gap={"5"}>
        {images && <ImageSlider images={images} />}
        <Flex direction={"column"} justify={"between"} align={"start"} gap={"3"}>
          <Heading className="text-start" weight={"bold"}>
            {name && name}
          </Heading>
          <Heading className="text-start text-blue-500" weight={"bold"}>
            {title && title}
          </Heading>
          <Text weight={"light"} color="gray">   
            {description && description}
          </Text>
          {images && (
            <Button style={{ cursor: "pointer" }}>View More Info</Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default card;
