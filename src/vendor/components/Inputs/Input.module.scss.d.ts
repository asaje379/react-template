declare namespace InputModuleScssNamespace {
  export interface IInputModuleScss {
    'bg-danger': string;
    'bg-dark': string;
    'bg-light': string;
    'bg-primary': string;
    'bg-secondary': string;
    'bg-success': string;
    'border-danger': string;
    'border-dark': string;
    'border-light': string;
    'border-primary': string;
    'border-secondary': string;
    'border-success': string;
    'danger-hover': string;
    'dark-hover': string;
    icon: string;
    input: string;
    input2: string;
    inputt: string;
    label: string;
    'light-hover': string;
    'primary-hover': string;
    'secondary-hover': string;
    'success-hover': string;
    'text-danger': string;
    'text-dark': string;
    'text-light': string;
    'text-primary': string;
    'text-secondary': string;
    'text-success': string;
  }
}

declare const InputModuleScssModule: InputModuleScssNamespace.IInputModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: InputModuleScssNamespace.IInputModuleScss;
};

export = InputModuleScssModule;
