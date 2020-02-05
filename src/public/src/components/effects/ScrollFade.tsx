import * as React from 'react';
import styled from 'styled-components';
import { Durations, Easings } from '@settings/all';
import { Observation, addObserve, observer, removeObserve } from './Observe';

export type ScrollFadeDirection = 'bottom' | 'top' | 'left' | 'right';
export type ScrollFadeDelay = 'short' | 'medium' | 'long';

export interface ScrollFadeProps {
  from?:ScrollFadeDirection;
  delay?:ScrollFadeDelay;
  amount?:number;
  visible?:boolean;
  children?:React.ReactNode;
}

export interface ScrollFadeState {
  visible:boolean; canFade:boolean;
}

const ScrollFadeWrapper = styled.div<ScrollFadeProps>(({ visible, ...props }) => {
  const { delay, from, amount } = { from: 'bottom', delay: 'long', amount: 4, ...props };
  const time = delay == 'long' ? Durations.timeLong : delay == 'medium' ? Durations.timeMedium : Durations.timeShort;

  return `
    display: inline-block;
    opacity: 0;
    transition:
      opacity ${time}s ${Easings.easeOut},
      transform ${time}s ${Easings.easeOut},
      -webkit-transform ${time}s ${Easings.easeOut}
    ;
    transform: translate(
      ${from == 'left' ? -amount : from == 'right' ? amount : 0}rem,
      ${from == 'top' ? -amount : from == 'bottom' ? amount : 0}rem
    );

    ${visible?`
      opacity: 1;
      transform: translate(0,0);
    `:''}
  `
});


export class ScrollFade extends React.Component<ScrollFadeProps, ScrollFadeState> {
  element:HTMLDivElement | null = null;
  observation:Observation | null = null;

  constructor(props:ScrollFadeProps) {
    super(props);
    this.state = { visible: false, canFade: !!observer };
  }
  
  componentDidMount() {
    if(!this.element) return;
    addObserve(this.observation = { element: this.element, callback: e => {
      this.setState({ visible: e.isIntersecting });
      if(this.state.visible && this.observation) removeObserve(this.observation);
    }});
  }

  componentWillUnmount() {
    if(this.observation) removeObserve(this.observation);
  }

  render() {
    return <ScrollFadeWrapper visible={this.state.visible} {...this.props} ref={e => this.element = e}>
      <span>
        { this.props.children }
      </span>
    </ScrollFadeWrapper>
  }
}