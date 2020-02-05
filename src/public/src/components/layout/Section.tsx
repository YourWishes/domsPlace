import * as React from 'react';
import styled from 'styled-components';
import { Gutters, MediaQueries } from '@settings/all';

export const Section = styled.section(props => `
  + ${() => Section} {
    margin-top: ${Gutters.extraExtraLarge};
  }

  ${MediaQueries.laptopUp} {
    + ${() => Section} {
      margin-top: ${Gutters.extremeLarge};
    }
  }
`);