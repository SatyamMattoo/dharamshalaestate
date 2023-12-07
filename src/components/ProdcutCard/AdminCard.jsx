import React from "react";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import ImageSlider from "../ImageSlider/ImageSlider";
import ChangeStatus from "./ChangeStatus";

const AdminCard = ({ name, description, images, title }) => {
  return (
    <Card className="rounded min-h-[200px] md:min-h-[300px] lg:min-h-[200px] max-w-[300px] md:min-w-[200px] lg:max-w-[500px] lg:min-w-[300px] m-5 p-4 shadow-md shadow-slate-700 relative hover:scale-105">
      <Flex direction={"column"} justify={"between"} align={"start"} gap={"5"}>
        {images && <ImageSlider images={images} />}
        <Flex
          direction={"column"}
          justify={"between"}
          align={"start"}
          gap={"3"}
        >
          <Heading className="text-start" weight={"bold"}>
            {name && name}
          </Heading>
          <Heading className="text-start text-blue-500" weight={"bold"}>
            {title && title}
          </Heading>
          <Text weight={"light"} color="gray">
            {description && description.length > 30
              ? `${description.slice(0, 30)}...`
              : description}
          </Text>
          <ChangeStatus />
          <Flex gap={"2"} justify={"between"}>
            {images && (
              <Button style={{ cursor: "pointer" }} size={"1"}>
                View More Info
              </Button>
            )}
            <Button style={{ cursor: "pointer" }} size={"1"}>
              Remove Property
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AdminCard;
