'use client';
import { RiGlobalLine } from 'react-icons/ri';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Button,
  DropdownMenu,
} from '@nextui-org/react';

function Header() {
  return (
    <Navbar className="h-[10vh] px-10 z-50" position="static">
      <NavbarBrand className="text-4xl font-bold">Logo</NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-24 font-semibold"
        justify="center"
      >
        <NavbarItem>
          <a href="/">Home</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">About</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#case">Cases Study</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">Contact</a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button variant="bordered" color="primary">
                <RiGlobalLine size={24} />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu color="primary" className="text-center">
            <DropdownItem className="hover:text-white">
              <span className="font-bold">EN</span>
            </DropdownItem>
            <DropdownItem className="hover:text-white">
              <span className="font-bold">FR</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
