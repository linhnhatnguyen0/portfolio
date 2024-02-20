import { BiMenu } from "react-icons/bi";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed w-full flex items-center justify-between h-[10vh]  px-20 z-10 bg-[#84a59dcb] backdrop-blur-md">
      <div className="text-4xl font-bold">Logo</div>
      <ul className="flex w-[40%] justify-between font-semibold">
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
