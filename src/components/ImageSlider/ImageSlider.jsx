"use client";

import { Box, Button, Flex } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <Box
        className="overflow-hidden w-full h-60 object-contain flex items-center justify-center"
        style={{ position: "relative" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className=" object-contain"
            />
          </div>
        ))}
      </Box>
      <Flex gap={4} justify={"between"} width={"100%"}>
        <Button
          size={"1"}
          onClick={prevSlide}
          style={{ cursor: "pointer" }}
          className="relative top-1/2 left-2 transform -translate-y-1/2"
        >
          Previous
        </Button>
        <Button
          size={"1"}
          onClick={nextSlide}
          style={{ cursor: "pointer" }}
          className="relative top-1/2 right-2 transform -translate-y-1/2"
        >
          Next
        </Button>
      </Flex>
    </>
  );
};

export default ImageSlider;
