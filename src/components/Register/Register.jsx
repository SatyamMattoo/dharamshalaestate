import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";

const register = () => {
  let [open, setOpen] = useState(false);
  return (
    
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div>
          <Button style={{ cursor: "pointer" }} size={"2"}>
            Register
          </Button>
        </div>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <div className="flex justify-between">
          <Dialog.Title>Register</Dialog.Title>
          <Dialog.Close>
            <Cross1Icon style={{ cursor: "pointer" }} />
          </Dialog.Close>
        </div>
        <Dialog.Description size="2" mb="4">
          Create a new account
        </Dialog.Description>
        <Flex direction={"column"} gap={"2"} align={"center"}>
          <Button
            color="iris"
            style={{ cursor: "pointer" }}
            onClick={() => signIn("google")}
          >
            {" "}
            Log In with Google
          </Button>
          <Text align={"center"}>- OR -</Text>
        </Flex>
        <RegisterForm afterRegister={() => setOpen(false)} />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default register;
