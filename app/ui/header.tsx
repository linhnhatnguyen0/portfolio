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
import { useTranslation } from 'next-i18next';

function Header() {
  const { t } = useTranslation('common');
  return (
    <Navbar className="h-[10vh] px-10 z-50" position="static">
      <NavbarBrand className="text-4xl font-bold">Logo</NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-24 font-semibold"
        justify="center"
      >
        <NavbarItem>
          <a href="/">{t('header-home')}</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#about">{t('header-about')}</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#case">{t('header-cases')}</a>
        </NavbarItem>
        <NavbarItem>
          <a href="#contact">{t('header-contact')}</a>
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
          <DropdownMenu
            className="text-center"
            itemClasses={{
              base: [
                'rounded-md',
                'text-default-500',
                'transition-opacity',
                'data-[hover=true]:text-white',
                'data-[hover=true]:bg-[#8e705b]',
                'dark:data-[hover=true]:bg-default-50',
                'data-[selectable=true]:focus:bg-default-50',
                'data-[pressed=true]:opacity-70',
                'data-[focus-visible=true]:ring-default-500',
              ],
            }}
          >
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
