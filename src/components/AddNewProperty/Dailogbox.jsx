"use client";

import React from "react";
import AddPropertyForm from "./AddPropertyForm";
import { Button, Dialog } from "@radix-ui/themes";
import { Cross1Icon } from "@radix-ui/react-icons";

const Dailogbox = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div>
          <Button size={"2"} style={{ cursor: "pointer" }}>
            Add New Property
          </Button>
        </div>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 400 }}>
        <div className="flex justify-between">
          <Dialog.Title>Add New Property</Dialog.Title>
          <Dialog.Close>
            <Cross1Icon style={{ cursor: "pointer" }} />
          </Dialog.Close>
        </div>
        <Dialog.Description size="2" mb="4">
          Add the following details
        </Dialog.Description>
        <AddPropertyForm />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default Dailogbox;
