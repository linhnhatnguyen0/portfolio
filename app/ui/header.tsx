import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between h-[8vh]  px-20 z-10 backdrop-blur-md">
      <div className="text-4xl font-bold">Logo</div>
      <ul className="flex w-[40%] justify-between font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#case">Cases Study</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="">
        <div className="border-2 px-6 py-1 rounded-lg border-[#8e705b]">
          <span className="font-bold">EN</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
