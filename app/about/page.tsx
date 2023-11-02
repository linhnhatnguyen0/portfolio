import Header from "../ui/header";
import Image from "next/image";
import profile from "@/public/about.webp";
import Link from "next/link";

function About() {
  return (
    <>
      <Header />
      <main className="flex items-center h-screen w-screen relative">
        <div className="left w-[60%] px-40 h-[55vh] flex flex-col justify-between">
          <h1 className="text-8xl font-bold">ABOUT ME</h1>
          <p className="w-[60%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul className="grid grid-cols-2 grid-rows-2 gap-8">
            <li className="">
              <Link
                href="#"
                className="w-72 rounded-lg text-[#515151] border-2 border-[#515151] font-semibold bg-[#F7EDE2] py-3 flex items-center justify-center"
              >
                Personal project
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="w-72 rounded-lg text-[#515151] border-2 border-[#515151] font-semibold bg-[#F7EDE2] py-3 flex items-center justify-center"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="w-72 rounded-lg text-[#515151] border-2 border-[#515151] font-semibold bg-[#F7EDE2] py-3 flex items-center justify-center"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="w-72 rounded-lg text-[#515151] border-2 border-[#515151] font-semibold bg-[#F7EDE2] py-3 flex items-center justify-center"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div className="right w-[40%] relative h-screen">
          <Image
            alt="Nhat Linh Nguyen picture in a studio"
            src={profile}
            loading="lazy"
            fill={true}
            className="object-cover object-bottom"
          />
        </div>
      </main>
    </>
  );
}

export default About;
