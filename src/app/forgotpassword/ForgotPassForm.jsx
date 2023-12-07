"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import toast from "react-hot-toast";
import axios from "axios";
import { Container, Button, Flex } from "@radix-ui/themes";

const forgotForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/user/forgotpassword", formData);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Container className="">
        <Flex gap={"2"} align={"end"} justify={"between"} direction={"column"} m={"5"}>
          <Form.Field className="flex flex-col w-full" name="email">
            <Form.Control asChild>
              <input
                className="box-border w-full self-center bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 my-3"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </Form.Control>
            <Form.Message
              className="text-[10px] opacity-[0.8] text-red-400 text-end"
              match="valueMissing"
            >
              Email Required
            </Form.Message>
            <Form.Message
              className="text-[10px] opacity-[0.8] text-red-400 text-end"
              match="typeMismatch"
            >
              Please provide a valid email
            </Form.Message>
          </Form.Field>
          <Form.Submit asChild>
            <div className="flex">
              <Button disabled={loading} style={{ cursor: "pointer" }}>{`${
                loading ? "Sending..." : "Send Reset Mail"
              }`}</Button>
            </div>
          </Form.Submit>
        </Flex>
      </Container>
    </Form.Root>
  );
};

export default forgotForm;
