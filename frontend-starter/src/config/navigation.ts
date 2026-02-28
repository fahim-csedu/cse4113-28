export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Dashboard", href: "/" },
  { label: "Module", href: "/module" },
  { label: "Reports", href: "/reports" },
  { label: "Profile", href: "/profile" }
];
