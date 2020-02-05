import { Colors, Fonts, FontWeights, FontSizes } from "@settings/all";
import { css } from "styled-components";

export const BodyStyles = css`
  body,html {
    margin: 0;
    padding: 0;
  }


  body {
    color: ${Colors.text};
    background: ${Colors.background};
    font-family: ${Fonts.body};
    font-weight: ${FontWeights.body};
    font-size: ${FontSizes.default};
  }
`;