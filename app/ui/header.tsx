'use client';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
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
    <Navbar shouldHideOnScroll={true} className="h-20" position="sticky">
      <NavbarBrand className="text-4xl font-bold">Logo</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-16" justify="center">
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
              <Button className="border-2 px-2 py-1 rounded-lg border-[#8e705b]">
                <BiMenu size={24} />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem>
              <span>EN</span>
            </DropdownItem>
            <DropdownItem>
              <span>FR</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
