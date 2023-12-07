import React, { useState } from "react";
import { Button, Dialog, Flex, Text } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";
import LoginForm from "./LoginForm";
import { signIn } from "next-auth/react";

const login = () => {
  let [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div>
          <Button size={"2"} style={{ cursor: "pointer" }}>
            Login
          </Button>
        </div>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 400 }}>
        <div className="flex justify-between">
          <Dialog.Title>Log In</Dialog.Title>
          <Dialog.Close>
            <Cross1Icon style={{ cursor: "pointer" }} />
          </Dialog.Close>
        </div>
        <Dialog.Description size="2" mb="4">
          Log In to your account
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
        <LoginForm afterLogin={() => setOpen(false)} />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default login;
