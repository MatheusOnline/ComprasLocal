import { variantStyles, sizes } from "./Button.variant";
import styled from "styled-components";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "third";
type Scale = "small" | "normal" | "medium" | "large";



type ButtonProps = {
    children: ReactNode;
    variant?: Variant;
    scale?: Scale;
    disable?: boolean;
    iconOnly?: boolean;
    onclick?: () => void;
}


export const Button = ({ children, variant, scale, disable, iconOnly, onclick }: ButtonProps) => {
    return(
        <ButtonStyled variant={variant} scale={scale} disabled={disable} iconOnly={iconOnly} onClick={onclick}>
            {children}
            
        </ButtonStyled>
    )

}





export const ButtonStyled = styled.button<{variant?: Variant; scale?: Scale; iconOnly?: boolean;}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  box-sizing: border-box;
  border-radius: 4px;

  ${({ theme, variant = "primary" }) => {
    const v = variantStyles[variant](theme);

    return `
      background-color: ${v.backgroundColor};
      color: ${v.color};
      border: ${v.border};
    `;
  }}

  ${({ theme, scale = "small", iconOnly }) => {
    const s = sizes[scale](theme);

    if (iconOnly) {
      return `
        width: 40px;
        padding: 0;
        
      `;
    }

    return `
      padding: ${s.padding};
      font-size: ${s.font_size};
    `;
  }}

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    ${({ theme, variant = "primary" }) => {
      const v = variantStyles[variant](theme);
      return `background-color: ${v.hover};`;
    }}
  }

  &.__button-icon{
    
  }
`;


Button.displayName = "Button"