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

const sizes: Record<Scale, { padding: string; font_size: string }> = {
    small: {
        padding: "5px 10px",
        font_size: "var(--text_small)"
    },
    normal: {
        padding: "10px 20px",
        font_size: "var(--text_normal)"
    },
    medium: {
        padding: "15px 30px",
        font_size: "var(--text_medium)"
    },
    large: {
        padding: "20px 40px",
        font_size: "var(--text_large)"
    }
};

export const ButtonStyled = styled.button<{ variant?: Variant; scale?: Scale; }>`
    box-sizing: border-box;
    border-radius: 4px;
    
    background-color: ${({ variant = "primary" }) => variants[variant].bg};
    color: ${({ variant = "primary" }) => variants[variant].color};
    border: ${({ variant = "primary" }) => variants[variant].border};

    padding: ${({ scale = "normal" }) => sizes[scale].padding};
    font-size: ${({ scale = "normal" }) => sizes[scale].font_size};

    transition: 0.2s;
    
    &:hover{
        cursor: pointer;
        background-color: ${({ variant = "primary" }) => variants[variant].hover};
    }

    &:disabled {
        background-color: #ccc;
        color: #666;
        border: none;
        cursor: not-allowed;
        opacity: 0.7;
    }
`;