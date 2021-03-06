import React from "react";
import { useTheme } from "@emotion/react";
import { Header, ProductFilters, Products, Footer } from "../components";
import { Group } from "../components/shared/Group";

const HomePage: React.VFC = () => {
  const theme = useTheme();
  return (
    <Group gap={theme.spacing.$6}>
      <Header />
      <Group>
        <ProductFilters />
        <Products />
      </Group>
      <Footer />
    </Group>
  );
}

export default HomePage;