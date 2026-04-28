import { useCallback } from "react";
import type { ReactNode } from "react";


type props ={
    children: ReactNode;
    types?: "submit" | "reset" | "button";
    palette?: "primary" | "secondary" | "neutral";
    variant?: "contained" | "outlined" | "text";
    disabled?: boolean;
    fullWidth?: boolean;
}

function Button1({ children, types, palette, variant, disabled, fullWidth }: props) {
    const getClassName = useCallback(() => {
      return `$ __button-${variant} __button-${variant}-${palette} `  
    }, [palette, variant,])

    
    return(
        <button type={types} disabled={disabled} className={getClassName()}>
            {children}
        </button>

    )
}

export default Button1;