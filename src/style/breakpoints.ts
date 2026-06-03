const width = window.innerWidth;

export const device = {
    isMobile: width <= 768,
    isTablet: width >= 768 && width < 1024, 
    isDesktop: width >= 1024,
}

