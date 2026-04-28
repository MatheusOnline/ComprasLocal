


export const variantStyles = {
  primary: (theme: any) => ({
    backgroundColor: theme.colors.brand_color_300,
    color: theme.colors.neutro_color_100,
    border: "none",
    hover: theme.colors.brand_color_400,
  }),

  secondary: (theme: any) => ({
    backgroundColor: "transparent",
    color: theme.colors.brand_color_300,
    border: `1px solid ${theme.colors.brand_color_300}`,
    hover: theme.colors.brand_color_400 + "20",
  }),

  third: (theme: any) => ({
    backgroundColor: theme.colors.accent_color_300,
    color: theme.colors.neutro_color_100,
    border: "none",
    hover: theme.colors.accent_color_400,
  }),
};

export const sizes = {
  small: (theme: any) => ({
    padding: "5px 10px",
    font_size: theme.fonts.small,
  }),
  normal: (theme: any) => ({
    padding: "10px 20px",
    font_size: theme.fonts.normal,
  }),
  medium: (theme: any) => ({
    padding: "15px 30px",
    font_size: theme.fonts.medium,
  }),
  large: (theme: any) => ({
    padding: "20px 40px",
    font_size: theme.fonts.large,
  }),
};