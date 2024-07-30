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
    <Navbar
      shouldHideOnScroll
      className="h-[10vh] px-10 z-50"
      position="sticky"
    >
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
      <NavbarContent className="">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button className="border-2 px-2 py-1 rounded-lg border-none focus-visible:outline-none">
                <RiGlobalLine size={24} />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu className="w-[100px] rounded-md py-2 px-1 bg-[#eceadd]">
            <DropdownItem>
              <Button className="hover:bg-[#e2e0d6] rounded-sm w-full py-1 mb-2">
                EN
              </Button>
            </DropdownItem>
            <DropdownItem>
              <Button className="hover:bg-[#e2e0d6] rounded-sm w-full py-1">
                FR
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
