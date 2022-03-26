import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Text } from "./components/shared";
import theme from "./theme.json";

const HomePage: React.VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Text variant="h1" isBold={false}>Test</Text>
    </ThemeProvider>
  );
}

export default HomePage;