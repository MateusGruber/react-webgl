
export enum Breakpoint {
    mobileSmall = "mobileSmall",
    mobileMedium = "mobileMedium",
    mobileLarge = "mobileLarge",
    tablet = "tablet",
    laptop = "laptop",
    laptopLarge = "laptopLarge",
  }
  
  export interface IStyledTheme {
    colors: { [key: string]: any };
    fonts: { [key: string]: string };
    medias: {
      up: (breakpoint: string) => string;
      down: (breakpoint: string) => string;
      between: (min: string, max: string) => string;
      breakpoint: { [key in Breakpoint]: string };
    };
    ui: {
      borderRadiusOf: (value: string) => string
    };
    sizes: { [key: string]: any };
  }
  