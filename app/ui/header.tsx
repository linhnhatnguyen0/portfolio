import { BiMenu } from "react-icons/bi";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between h-[10vh]  pl-20 pr-20 z-10">
      <ul className="flex w-[40%] justify-between">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/case"}>Case Study</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="">
        <div className="border-2 px-6 py-1 rounded-lg">
          <span className="font-bold">EN</span>
        </div>
      </div>
    </header>
  );
}

export default Header;