import { ThemeProvider } from "@emotion/react";
import React from "react";
import HomePage from "./pages/HomePage";
import theme from "./theme.json";

const Root: React.VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default Root;