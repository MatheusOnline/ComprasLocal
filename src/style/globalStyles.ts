import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        // === Colors === //
        --brand_color_100: #E7EDFF;
        --brand_color_200: #91A7FF;
        --brand_color_300: #008ECC;
        --brand_color_400: #2F4ACB;
        --brand_color_500: #1C2E8A;

        --neutro_color_100: #F8F9FA;
        --neutro_color_200: #DEE2E6;
        --neutro_color_300: #ADB5BD;
        --neutro_color_400: #495057;

        --feedback_color_green: #37B24D;
        --feedback_color_red: #F03E3E;
        --feedback_color_yellow: #FCC419;

        --accent_color_200: #FFB366;
        --accent_color_300: #FF922B;
        --accent_color_400: #F76707;

        --background_color: #FFFFFF;

        // === Font Sizes === //

        --text_small: 14px;
        --text_normal: 16px;
        --text_medium: 18px;
        --text_large: 24px;
    }

    *{
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`