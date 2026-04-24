import styled from "styled-components";




type Variant = "primary" | "secondary" | "third";
type Scale = "small" | "normal" | "medium" | "large";

const variants: Record<Variant, { bg: string; color: string; border: string; hover: string; }> = {
    primary: {
        bg:     "var(--brand_color_300)",
        color:  "var(--neutro_color_100)",
        border: "none",
        hover:  "var(--brand_color_400)"
        
    },

    secondary: {
        bg:     "var(--background_color)",
        color:  "var(--brand_color_300)",
        border: "1px solid var(--brand_color_300)",
        hover:  "var(--brand_color_100)"
        

    },

    third:{
        bg: "var(--accent_color_300)",
        color: "var(--neutro_color_100)",
        border: "none",
        hover: "var(--accent_color_400)"
    }
    
};

const sizes: Record<Scale, { padding: string; }> = {
    small: {
        padding: "5px 10px"
    },
    normal: {
        padding: "10px 20px"
    },
    medium: {
        padding: "15px 30px"
    },
    large: {
        padding: "20px 40px"
    }
};

export const ButtonStyled = styled.button<{ variant?: Variant; scale?: Scale; }>`
    box-sizing: border-box;
    border-radius: 4px;
    
    background-color: ${({ variant = "primary" }) => variants[variant].bg};
    color: ${({ variant = "primary" }) => variants[variant].color};
    border: ${({ variant = "primary" }) => variants[variant].border};

    padding: ${({ scale = "normal" }) => sizes[scale].padding};
    

    &:hover{
        transition: 0.2s;
        cursor: pointer;
        background-color: ${({ variant = "primary" }) => variants[variant].hover};
    }
`;