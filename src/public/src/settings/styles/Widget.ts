import { Gutters } from "./Gutter";
import { Borders } from "./Border";
import { Colors } from "./Color";

export type WidgetTheme = (
  'default' | 'primary' | 'danger' | 'success'
)

export interface WidgetProps {
  disabled?:boolean;
  theme?:WidgetTheme;
}

export interface WidgetSettings {
  hover?:boolean;
}

export const WidgetStyles = ({
  disabled, theme
}:WidgetProps, {
  hover
}:WidgetSettings={}) => `
  display: inline-block;
  position: relative;

  font-weight: inherit;
  font-family: inherit;
  font-size: inherit;
  border: none;
  box-shadow: none;
  outline: none;
  appearance: none;

  padding: ${Gutters.medium} ${Gutters.large};
  border: ${Borders.default};
  color: ${Colors.text};

  margin-top: ${Gutters.small};

  ${disabled ? `
    background: ${Colors.disabled};
    border-color: ${Colors.disabled};
    color: ${Colors.disabledDark};
    cursor: not-allowed;
    
  ` : theme == 'primary' ? `
    background: ${Colors.primary};
    border-color: ${Colors.primaryDark};
    ${hover ? `&:hover { background: ${Colors.primaryLight}; }` : ''}

  ` : theme == 'danger' ? `
    background: ${Colors.danger};
    border-color: ${Colors.dangerDark};
    ${hover ? `&:hover { background: ${Colors.dangerLight}; }` : ''}

  ` : theme == 'success' ? `
    background: ${Colors.success};
    border-color: ${Colors.successDark};
    ${hover ? `&:hover { background: ${Colors.successLight}; }` : ''}
    
  ` : `
    ${hover ? `&:hover { border-color: ${Colors.defaultLight} }` : ''}
    background: transparent;
  `}
`