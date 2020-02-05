import { graphql } from "gatsby";
import { FluidObject } from 'gatsby-image';

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export interface FluidImage {
  childImageSharp:FluidObject;
}