import React from "react";
import { useTheme } from "@emotion/react";
import { Header, Footer, StlUploader } from "../components";
import { Group } from "../components/shared/Group";

const StlUploadPage: React.VFC = () => {
  const theme = useTheme();
  return (
    <Group gap={theme.spacing.$6}>
      <Header />
      <StlUploader />
      <Footer />
    </Group>
  );
}

export default StlUploadPage;