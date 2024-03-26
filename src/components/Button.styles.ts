import styled, { css } from 'styled-components';

export type VariantTypes = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: VariantTypes;
}

const variantColors = {
  primary: "#007bff",
  secondary: "#6c757d",
  danger: "#dc3545",
  success: "#28a745",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};

  ${props => {
    return css`
      background-color: ${variantColors[props.variant]};
    `
  }}
`