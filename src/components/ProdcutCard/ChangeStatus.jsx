"use client";

import React from "react";
import { Button, Select } from "@radix-ui/themes";

const ChangeStatus = () => {
  return (
    <form className="flex w-full justify-between">
      <Select.Root size={"1"} defaultValue="unsold">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="sold">Sold</Select.Item>
          <Select.Item value="unsold">Unsold</Select.Item>
        </Select.Content>
      </Select.Root>
      <Button style={{ cursor: "pointer" }} size={"1"}>
        Change Status
      </Button>
    </form>
  );
};

export default ChangeStatus;
