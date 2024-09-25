import styled, { css } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;

  ${props => {
    return css`
      background-color: ${props.theme.primary};
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`;
