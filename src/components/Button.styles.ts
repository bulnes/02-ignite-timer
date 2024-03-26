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

  ${props => {
    return css`
      background-color: ${variantColors[props.variant]};
    `
  }}
`