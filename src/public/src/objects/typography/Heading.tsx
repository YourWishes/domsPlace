import styled, { css } from "styled-components";
import { Fonts, FontWeights, FontSizes } from "@settings/all";


const Heading = css`
  font-family: ${Fonts.heading};
  display: block;
  font-weight: ${FontWeights.heading};
  margin: 0.4em 0 0.5em;
`;

export const Heading1 = styled.h1`
  ${Heading}
  font-size: ${FontSizes.heading1};
`;

export const Heading2 = styled.h2`
  ${Heading}
  font-size: ${FontSizes.heading2}
`;

export const Heading3 = styled.h3`
  ${Heading}
  font-size: ${FontSizes.heading3};
`;

export const Heading4 = styled.h4`
  ${Heading}
  font-size: ${FontSizes.heading4};
`;

export const Heading5 = styled.h5`
  ${Heading}
  font-size: ${FontSizes.heading5};
`;

export const Heading6 = styled.h6`
  ${Heading}
  font-size: ${FontSizes.heading6};
`;