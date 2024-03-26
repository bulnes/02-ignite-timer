import { ButtonContainer, VariantTypes } from "./Button.styles";

interface ButtonProps {
  variant?: VariantTypes;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Click me</ButtonContainer>;
}
