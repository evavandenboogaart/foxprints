import styled from "@emotion/styled";

const variants = ["h1"];

const webStyles = {
  bold: `
    font-weight: bold;
  `,
  default: `
    color: red;
  `,
  h1: `
    color: black;
  `
}

const Text = styled.span<{ isBold?: boolean, variant?: string }>`
  ${({ variant }) => variant === "h1" ? webStyles.h1 : ""}
  ${({ variant }) => !variants.includes(variant) ? webStyles.default : ""}
  ${({ isBold = false }) => isBold ? webStyles.bold : ""}
`;


(variant?: string, isBold?: boolean) => {
  switch (variant) {
    case "h1":
      return 
    default:
      return styled.p`
        ${webStyles.default}
        ${isBold ? webStyles.bold : ""}
      `;
  }
}

export default Text;