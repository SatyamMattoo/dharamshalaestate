"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import * as Form from "@radix-ui/react-form";
import { Button, Container, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const LoginForm = ({ afterLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //google signin
  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", formData);
      console.log(response.data)
      if (response.data.success) {
        console.log("The user signed in", response);
        signIn("credentials", {
          email: formData.email,
          password: formData.password,
          callbackUrl: "/",
          redirect: true,
        });
      } else {
        toast.error("Internal Server Error!");
      }
      afterLogin();
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Email
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Email Required
          </Form.Message>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px]">
            Password
          </Form.Label>
          <Form.Message
            className="text-[10px] opacity-[0.8] text-red-400"
            match="valueMissing"
          >
            Password required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter Your Password"
          />
        </Form.Control>
      </Form.Field>
      <Link
        href="/forgotpassword"
        className="cursor-pointer hover:text-blue-700"
        onClick={afterLogin}
      >
        <Text size={"1"} className="text-shadow text-end">
          Forgot Password?
        </Text>
      </Link>
      <Form.Submit asChild>
        <div className="flex justify-end gap-2">
          <Button style={{ cursor: "pointer" }}>{`${
            loading ? "Logging In..." : "Log In"
          }`}</Button>
        </div>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
