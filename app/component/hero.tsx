import Image from "next/image";
import Header from "../ui/header";
import { TypewriterEffect } from "../ui/typewriter-effect";

const words = [
  { text: "Nhat", className: "text-[#F7EDE2] " },
  { text: "Linh", className: "text-[#F7EDE2] " },
  { text: "NGUYEN", className: "text-[#F7EDE2] " },
];
const words2 = [
  { text: "FRONT-END", className: "text-[#F7EDE2] " },
  { text: "DEVELOPER", className: "text-[#F7EDE2] " },
];

export default function Home() {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center font-semibold">
        <TypewriterEffect words={words} className="mb-5" />
        <TypewriterEffect words={words2} />
      </div>
    </>
  );
}
