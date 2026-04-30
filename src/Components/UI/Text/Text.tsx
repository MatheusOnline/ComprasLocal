import type { ReactNode } from "react"
import styled from "styled-components"

type props = {
    children: ReactNode;
    fontWeight?: "normal" | "semi-bold" | "bold";
    fontSize?: "small" | "normal" | "medium" | "large";
    color?: "primary" | "secondary" ;
}

export function Text({ children, fontWeight, fontSize, color = "primary" }: props) {
    const className = `__text-weight-${fontWeight} __text-scale-${fontSize} __text-color-${color} `

    return(
        <TextStyled fontWeight={fontWeight} fontSize={fontSize}  className={className}>
            {children}
        </TextStyled>
    )

}

const TextStyled = styled.p<props>`
    &.__text-color-primary {
        color: ${({ theme }) => theme.colors.neutro_color_400};
}
    &.__text-color-secondary {
        color: ${({ theme }) => theme.colors.neutro_color_300};
    }

   &.__text-weight-normal {
        font-weight: normal;
    
   }
    &.__text-weight-semi-bold {
        font-weight: 600;
    }
    &.__text-weight-bold {
        font-weight: bold;
    }

    &.__text-scale-small {
        font-size: ${({ theme }) => theme.fonts.small};
    }
    &.__text-scale-normal {
        font-size: ${({ theme }) => theme.fonts.normal};
    }
    &.__text-scale-medium {
        font-size: ${({ theme }) => theme.fonts.medium};
    }
    &.__text-scale-large {
        font-size: ${({ theme }) => theme.fonts.large};
    }
`