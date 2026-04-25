import type { ReactNode } from "react"
import { ButtonStyled } from "./styled"

type Variant = "primary" | "secondary" | "third";
type Scale = "small" | "normal" | "medium" | "large";


type ButtonProps = {
    children: ReactNode;
    variant?: Variant;
    scale?: Scale;
    disable?: boolean;
}


export const Button = ({ children, variant, scale, disable }: ButtonProps) => {
    return(
        <ButtonStyled variant={variant} scale={scale} disabled={disable}>
            {children}
            
        </ButtonStyled>
    )

}