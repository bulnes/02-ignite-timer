import styled, { css } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  border-radius: 4px;
  border: 0;
  margin: 8px;

  ${props => {
    return css`
      background-color: ${props.theme['green-500']};
      color: ${props => props.theme.white};
    `
  }}
`;
