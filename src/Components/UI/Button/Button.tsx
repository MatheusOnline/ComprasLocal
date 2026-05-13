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
    onclick?: () => void;
    maxWidth?: string;
    maxHeight?: string;
}

export function Button({ children, type, palette, variant, disabled, fullWidth, icon, maxWidth, maxHeight, onclick }: props) {
    const getClassName = useCallback(() => {
      return `$ __button-${variant} __button-${variant}-${palette} `  
    }, [palette, variant,])

    
    return(
        <ButtonStyled type={type} disabled={disabled} className={getClassName()} fullWidth={fullWidth} icon={icon} maxWidth={maxWidth} maxHeight={maxHeight} onClick={onclick}>
            {children}
        </ButtonStyled>

    )
}

Button.displayName = 'Button'

const ButtonStyled = styled.button<props>`
    box-sizing: border-box;
    border: 1px solid transparent;
    
    cursor: pointer;
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 4px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: fit-content;
    font-size: ${({ theme }) => theme.fonts.normal};
    max-width: ${({ maxWidth }) => maxWidth};
    max-height: ${({ maxHeight }) => maxHeight};


    //Definição de estilos para os botoes CONTAINED
    &.__button-contained {
        
        color: ${({ theme }) => theme.colors.neutro_color_200};
        
        transition: background-color 0.3s ease;

        &.__button-contained-primary {
            background: ${({ theme }) => theme.colors.brand_color_400};
        
            &:hover{
                background: ${({ theme }) => theme.colors.brand_color_500};
            
            }
            &:active{
                background: ${({ theme }) => theme.colors.brand_color_600};
            }
        }

        
        &.__button-contained-secondary {
            background-color: ${({ theme }) => theme.colors.secondary_color_400};

            &:hover{
                background-color: ${({ theme }) => theme.colors.secondary_color_500};
            }
            &:active{
                background-color: ${({ theme }) => theme.colors.secondary_color_600};
            }
        }

        &.__button-contained-neutral {
            background-color: ${({ theme }) => theme.colors.neutro_color_300};
        
            &:hover{
                background-color: ${({ theme }) => theme.colors.neutro_color_400};
            }
            &:active{
                background-color: ${({ theme }) => theme.colors.neutro_color_500};
            }
        }

        
    }

     //Definição de estilos para os botoes OUTLINED
    &.__button-outlined {
        background: transparent;
        border: 1px solid;
        transition: background-color 0.3s ease, color 0.3s ease;
        

        &.__button-outlined-primary {
            border-color: ${({ theme }) => theme.colors.brand_color_400};
            color: ${({ theme }) => theme.colors.brand_color_400};
            
            &:hover{
                background-color: ${({ theme }) => theme.colors.brand_color_200};
               
            }
            &:active{
                background-color: ${({ theme }) => theme.colors.brand_color_300};
            }
        }

        &.__button-outlined-secondary {
            border-color: ${({ theme }) => theme.colors.secondary_color_400};
            color: ${({ theme }) => theme.colors.secondary_color_400};

            &:hover{
                background-color: ${({ theme }) => theme.colors.secondary_color_200};
                
            }
            &:active{
                background-color: ${({ theme }) => theme.colors.secondary_color_300};
            }
        }

        &.__button-outlined-neutral {
            border-color: ${({ theme }) => theme.colors.neutro_color_500};
            color: ${({ theme }) => theme.colors.neutro_color_500}; 

            &:hover{
                background-color: ${({ theme }) => theme.colors.neutro_color_300};
                
            }
            &:active{
                background-color: ${({ theme }) => theme.colors.neutro_color_400};
            }
        }
    }

    ${({ fullWidth }) => fullWidth && css`
            width: 100%;
        `}

    ${({ disabled }) => disabled && css`
        opacity: 0.40;
        pointer-events: none;
        cursor: not-allowed ;
    `}

    ${({ icon }) => icon && css`
        padding: 8px 8px;
        box-sizing: border-box;
        width: 40px;
    `}

`