import styled from "@emotion/styled";

export type Justify = "center" | "start" | "end" | "space-between" | "space-around" | "space-evenly";
export type Align = "center" | "start" | "end" | "stretch" | "baseline";


const webStyles = {
  group: (gap: number = 0, justify: Justify = "start", align: Align = "start") => `
    display: flex;
    gap: ${gap}px;
    align-items: ${align};
    justify-content: ${justify};
  `,
  vertical: `
    flex-direction: row;
  `,
  horizontal: `
    flex-direction: column;
  `,
};

const Group = styled.span<{ isVertical?: boolean, gap?: number, justify?: Justify, align?: Align }>`
  ${({ gap, justify, align }) => webStyles.group(gap, justify, align)}
  ${({ isVertical }) => isVertical ? webStyles.vertical : webStyles.horizontal}
`;

export default Group;