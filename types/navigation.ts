export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface Breadcrumb {
  readonly label: string;
  readonly href?: string; // absent on the current page
}
