import { Colors } from "./tokens/Colors";
import { fontSize } from "./tokens/Fonts";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
        brand_color_100: string;
        brand_color_200: string;
        brand_color_300: string;
        brand_color_400: string;
        brand_color_500: string;
        neutro_color_100: string;
        neutro_color_200: string;
        neutro_color_300: string;
        neutro_color_400: string;
        feedback_color_green: string;
        feedback_color_red: string;
        feedback_color_yellow: string;
        accent_color_200: string;
        accent_color_300: string;
        accent_color_400: string;
        background_color: string;
    };
    fonts: {
        small: string;
        normal: string;
        medium: string;
        large: string;

    };
  }
}


const defaultTheme = {
    colors: Colors,
    fonts: fontSize,
}


export default defaultTheme;