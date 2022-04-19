import React from "react";
import PageName from "../components/PageName";
import SelectionCard from "../components/SelectionCard";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <PageName />
      <SelectionCard />
      <SelectionCard />
      <SelectionCard />
      <SelectionCard />
      <SelectionCard />
      <SelectionCard />
    </div>
  );
}
