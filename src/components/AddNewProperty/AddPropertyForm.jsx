"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as Form from "@radix-ui/react-form";
import { Button, Text } from "@radix-ui/themes";
import axios from "axios";
import toast from "react-hot-toast";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
images:""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Title
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Title Required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Property Title"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Description
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Description required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Enter the description"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Price
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Price Required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
            value={formData.price}
            onChange={handleChange}
            type="text"
            placeholder="Enter the price(also add per marla or karnal)"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Images
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Images Required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
            value={formData.images}
            onChange={handleChange}
            type="file"
            placeholder="Enter the images"
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <div className="flex justify-end">
          <Button style={{ cursor: "pointer" }}>{`${
            loading ? "Adding..." : "Add"
          }`}</Button>
        </div>
      </Form.Submit>
    </Form.Root>
  );
};

export default AddPropertyForm;
