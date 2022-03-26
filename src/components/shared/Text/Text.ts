import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

const variants = ["h1", "h2", "h3", "h4", "h5", "h6"];

const webStyles = {
  bold: `
    font-weight: bold;
  `,
  h1: (theme: Theme) => `
    font-size: 2em;
    color: ${theme.colors.dark};
  `,
  h2: (theme: Theme) => `
    font-size: 1.5em;
    color: ${theme.colors.dark};
  `,
  h3: `
    font-size: 1.17em;
  `,
  h4: ``,
  h5: `
    font-size: 0.83em;
  `,
  h6: `
    font-size: 0.67em;
  `,
  default: ``,
}

const Text = styled.span<{ isBold?: boolean, variant?: string }>`
  ${({ variant }) => !variants.includes(variant) ? webStyles.default : ""}
  ${({ isBold = false }) => isBold ? webStyles.bold : ""}
  ${({ variant, theme }) => variant === "h1" ? webStyles.h1(theme) : ""}
  ${({ variant, theme }) => variant === "h2" ? webStyles.h2(theme) : ""}
  ${({ variant }) => variant === "h3" ? webStyles.h3 : ""}
  ${({ variant }) => variant === "h4" ? webStyles.h4 : ""}
  ${({ variant }) => variant === "h5" ? webStyles.h5 : ""}
  ${({ variant }) => variant === "h6" ? webStyles.h6 : ""}
`;

export default Text;