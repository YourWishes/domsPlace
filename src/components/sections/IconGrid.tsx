import * as React from 'react';
import styled, { css } from 'styled-components';
import { Boundary, BoundaryProps } from '@components/layout/Boundary';
import { Section } from '@components/layout/Section';
import { Frame } from '@components/layout/Frame';
import { Gutters, MediaQueries } from '@settings/all';
import { ScrollFade } from '@components/effects/ScrollFade';

const IconGridIconSplit = (index:number, spacing:number, rows:number, columns:number) => {
  let rowsWidth = spacing * (rows - 1);
  let halfRowsWidth = (rowsWidth / 2) - rowsWidth;
  let x = halfRowsWidth + (spacing * (index/columns));

  return `
    width: ${100 / columns}%;
    transform: translateX(${x}%);
  `;
}

const IconGridIconWrapper = styled.div((props:{index:number}) => `
  width: 20%;
  padding: ${Gutters.extraSmall};

  ${MediaQueries.mobileUp} {
    padding: ${Gutters.small};
  }

  ${MediaQueries.tabletUp} {
    ${IconGridIconSplit(props.index ? props.index : 0, 30, 5, 5)}
  }

  ${MediaQueries.laptopUp} {
    ${IconGridIconSplit(props.index ? props.index : 0, 50, 5, 5)}
  }
`);

const IconGridIconInner = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const IconGridIconImage = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: contain;
  object-position: center;
`;

export type IconGridIconProps = {
  index?:number;
  title:string;
  image:any;
}

const IconGridIcon = (props:IconGridIconProps) => (
  <IconGridIconWrapper index={props.index ? props.index : 0}>
    <IconGridIconInner>
      <IconGridIconImage {...props} src={props.image} />
    </IconGridIconInner>
  </IconGridIconWrapper>
);


const IconGridWrapper = styled((p:BoundaryProps) => <Boundary as={Section} {...p} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconGridContent = styled(Frame)`
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-bottom: ${Gutters.extraSmall};

  ${MediaQueries.mobileUp} {
    width: auto;
    margin-bottom: ${Gutters.small};
  }
`;

const IconGridGrid = styled(ScrollFade)`
  width: 100%;
`;

const IconGridInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  ${MediaQueries.tabletUp} {
    max-width: 700px;
  }
`;


export type IconGridProps = BoundaryProps & {
  title?:React.ComponentFactory<any,any>;
  icons?:IconGridIconProps[];
}

export const IconGrid = ({ icons, title, ...props }:IconGridProps) => (
  <IconGridWrapper {...props}>
    <IconGridContent padded>
      { title ? title() : null }
    </IconGridContent>

    <IconGridGrid delay="long" from="bottom">
      <IconGridInner>
        { icons ? icons.map((icon,i) => <IconGridIcon index={i} {...icon} />) : null }
      </IconGridInner>
    </IconGridGrid>
  </IconGridWrapper>
);