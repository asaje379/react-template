declare namespace ButtonModuleScssNamespace {
  export interface IButtonModuleScss {
    'bg-danger': string;
    'bg-dark': string;
    'bg-gray': string;
    'bg-light': string;
    'bg-primary': string;
    'bg-secondary': string;
    'bg-success': string;
    'bg-white': string;
    'border-danger': string;
    'border-dark': string;
    'border-light': string;
    'border-primary': string;
    'border-secondary': string;
    'border-success': string;
    btn: string;
    danger: string;
    'danger-hover': string;
    dark: string;
    'dark-hover': string;
    expand: string;
    lg: string;
    light: string;
    'light-hover': string;
    outline: string;
    primary: string;
    'primary-hover': string;
    rounded: string;
    secondary: string;
    'secondary-hover': string;
    success: string;
    'success-hover': string;
    'text-danger': string;
    'text-dark': string;
    'text-light': string;
    'text-primary': string;
    'text-secondary': string;
    'text-success': string;
    'text-white': string;
  }
}

declare const ButtonModuleScssModule: ButtonModuleScssNamespace.IButtonModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModuleScssNamespace.IButtonModuleScss;
};

export = ButtonModuleScssModule;
