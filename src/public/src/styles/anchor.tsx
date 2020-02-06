import { Colors } from "@settings/all";
import { css } from "styled-components";

export const AnchorStyles = css`
  a {
    text-decoration: inherit;
    color: ${Colors.primary};
    &:hover { text-decoration: underline; }
  }
`;