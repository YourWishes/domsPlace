import { css } from "styled-components";

export const StylePlaceholder = (content:string) => css`
  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
    ${content}
  }
`;