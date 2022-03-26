import React from "react";
import { Text } from "../components/shared";
import { Group } from "../components/shared/Group";

const HomePage: React.VFC = () => {
  return (
    <Group gap={100}>
      <Text variant="h1" isBold={false}>Test</Text>
      <Text variant="h1" isBold={false}>Test</Text>
    </Group>
  );
}

export default HomePage;