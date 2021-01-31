declare namespace NavbarModuleScssNamespace {
  export interface INavbarModuleScss {
    absolute: string;
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
    'hide-sidebar': string;
    'light-hover': string;
    links: string;
    'lk-group': string;
    'lk-label': string;
    'lk-title': string;
    'primary-hover': string;
    'sb-company': string;
    'secondary-hover': string;
    sidebar: string;
    statusbar: string;
    'success-hover': string;
    'text-danger': string;
    'text-dark': string;
    'text-light': string;
    'text-primary': string;
    'text-secondary': string;
    'text-success': string;
    toolbar: string;
  }
}

declare const NavbarModuleScssModule: NavbarModuleScssNamespace.INavbarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavbarModuleScssNamespace.INavbarModuleScss;
};

export = NavbarModuleScssModule;
