import { useCallback } from "react";
import type { ReactNode } from "react";
import styled, { css } from "styled-components";

type props ={
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    palette?: "primary" | "secondary" | "neutral";
    variant?: "contained" | "outlined" | "text" ;
    icon?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
}

function Button1({ children, type, palette, variant, disabled, fullWidth, icon }: props) {
    const getClassName = useCallback(() => {
      return `$ __button-${variant} __button-${variant}-${palette} `  
    }, [palette, variant,])

    
    return(
        <Button type={type} disabled={disabled} className={getClassName()} fullWidth={fullWidth} icon={icon}>
            {children}
        </Button>

    )
}

export default Button1;

const Button = styled.button<props>`
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fonts.normal};

    &.__button-contained {
        border: none;
        color: white;
        transition: background-color 0.3s ease;
        &.__button-contained-primary {
            background: ${({ theme }) => theme.colors.brand_color_300};
        
            &:hover{
                background: ${({ theme }) => theme.colors.brand_color_400};
            
            }
        }

        
        &.__button-contained-secondary {
            background-color: ${({ theme }) => theme.colors.accent_color_300};

            &:hover{
                background-color: ${({ theme }) => theme.colors.accent_color_400};
            }
        }

        &.__button-contained-neutral {
            background-color: ${({ theme }) => theme.colors.neutro_color_300};
        
            &:hover{
                background-color: ${({ theme }) => theme.colors.neutro_color_400};
            }
        }

        
    }

    &.__button-outlined {
        background: transparent;
        border: 1px solid;
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: transparent;

        &.__button-outlined-primary {
            border-color: ${({ theme }) => theme.colors.brand_color_300};
            color: ${({ theme }) => theme.colors.brand_color_300};
            
            &:hover{
                background-color: ${({ theme }) => theme.colors.brand_color_200};
                color: white;
            }
        }

        &.__button-outlined-secondary {
            border-color: ${({ theme }) => theme.colors.accent_color_300};
            color: ${({ theme }) => theme.colors.accent_color_300};
            
            &:hover{
                background-color: ${({ theme }) => theme.colors.accent_color_200};
                color: white;
            }
        }

        &.__button-outlined-neutral {
            border-color: ${({ theme }) => theme.colors.neutro_color_300};
            color: ${({ theme }) => theme.colors.neutro_color_300}; 

            &:hover{
                background-color: ${({ theme }) => theme.colors.neutro_color_200};
                color: white;
            }
        }
    }

    &.__button-icon{
        background: transparent;
    }


    ${({ fullWidth }) => fullWidth && css`
            width: 100%;
        `}

    ${({ disabled }) => disabled && css`
        opacity: 0.70;
        cursor: not-allowed ;
        pointer-events: none;
    `}

    ${({ icon }) => icon && css`
        padding: 8px 8px;
        box-sizing: border-box;
        width: 40px;
    `}

`