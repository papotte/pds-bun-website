import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const menuitems = [
  {
    title: "Features",
    path: "#",
    children: [
      { title: "Action", path: "#" },
      { title: "Another action", path: "#" },
      { title: "Dropdown Submenu", path: "#" },
    ],
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function NavbarWrapper() {
  return (
    <Navbar fluid>
      <NavbarBrand as={Link} href={"/"}>
        <span className="font-bold">Astro</span>
        <span>ship</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="*:items-center">
        {menuitems.map((item) => (
          <NavbarLink key={item.path} href={item.path}>
            {item.title}
          </NavbarLink>
        ))}
        <DarkThemeToggle />
      </NavbarCollapse>
    </Navbar>
  );
}
