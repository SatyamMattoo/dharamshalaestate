"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import toast from "react-hot-toast";
import axios from "axios";
import { Container, Button, Flex, Box, Heading } from "@radix-ui/themes";

const ResetPassword = ({ params }) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { id } = params;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.confirmPassword !== formData.newPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/user/forgotpassword/${id}`,
        formData
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="h-screen ">
      <Flex justify={"center"} align={"center"} m={"9"}>
        <div className=" m-4 py-4 rounded-[20px]  md:w-3/4 lg:w-1/3 border border-slate-600">
          <Heading align={"center"} m={"3"}>
            Reset password
          </Heading>
          <Form.Root onSubmit={handleSubmit}>
            <Container className="">
              <Flex
                gap={"2"}
                align={"end"}
                justify={"between"}
                direction={"column"}
                m={"5"}
              >
                <Form.Field className="flex flex-col w-full" name="email">
                  <Form.Control asChild>
                    <input
                      className="box-border w-full self-center bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 my-3"
                      type="password"
                      required
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Enter new password"
                    />
                  </Form.Control>
                  <Form.Message
                    className="text-[10px] opacity-[0.8] text-red-400 text-end"
                    match="valueMissing"
                  >
                    New Password Required
                  </Form.Message>
                </Form.Field>
                <Form.Field className="flex flex-col w-full" name="email">
                  <Form.Control asChild>
                    <input
                      className="box-border w-full self-center bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 my-3"
                      type="password"
                      required
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                    />
                  </Form.Control>
                  <Form.Message
                    className="text-[10px] opacity-[0.8] text-red-400 text-end"
                    match="valueMissing"
                  >
                    Confirm Your Password
                  </Form.Message>
                </Form.Field>
                <Form.Submit asChild>
                  <div className="flex">
                    <Button
                      disabled={loading}
                      style={{ cursor: "pointer" }}
                    >{`${loading ? "Reseting..." : "Reset Password"}`}</Button>
                  </div>
                </Form.Submit>
              </Flex>
            </Container>
          </Form.Root>
        </div>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
