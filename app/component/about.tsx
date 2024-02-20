import Header from "../ui/header";
import Image from "next/image";
import profile from "@/public/about.webp";
import profile_chaise from "@/public/profile-chaise.jpg";
import profile_music from "@/public/profile-music.jpg";
import profile_thinking from "@/public/profile_thinking.jpg";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="flex items-center h-screen w-full relative justify-around px-24">
        <div className="left w-[50%] flex flex-col justify-between">
          <h1 className="text-8xl font-bold mb-8">ABOUT ME</h1>
          <p className="w-[80%] mb-8">
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
                className="w-72 rounded-lg hover:text-[#515151] text-[#F7EDE2] border-2 hover:border-[#515151] font-semibold hover:bg-[#F7EDE2] border-[#F7EDE2] bg-transparent py-3 flex items-center justify-center transition ease-in-out"
              >
                Personal project
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-72 rounded-lg hover:text-[#515151] text-[#F7EDE2] border-2 hover:border-[#515151] font-semibold hover:bg-[#F7EDE2] border-[#F7EDE2] bg-transparent py-3 flex items-center justify-center transition ease-in-out"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-72 rounded-lg hover:text-[#515151] text-[#F7EDE2] border-2 hover:border-[#515151] font-semibold hover:bg-[#F7EDE2] border-[#F7EDE2] bg-transparent py-3 flex items-center justify-center transition ease-in-out"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="w-72 rounded-lg hover:text-[#515151] text-[#F7EDE2] border-2 hover:border-[#515151] font-semibold hover:bg-[#F7EDE2] border-[#F7EDE2] bg-transparent py-3 flex items-center justify-center transition ease-in-out"
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 w-[30%] h-[60%] gap-8 transition-all hover:gap-3">
          <Image
            alt="Nhat Linh Nguyen picture in a studio"
            src={profile_music}
            loading="lazy"
            className="object-cover h-full rounded-lg"
          />
          <Image
            alt="Nhat Linh Nguyen picture in a studio"
            src={profile}
            loading="lazy"
            className="object-cover h-full rounded-lg row-span-2"
          />
          <Image
            alt="Nhat Linh Nguyen picture in a studio"
            src={profile_chaise}
            loading="lazy"
            className="object-cover h-full rounded-lg row-span-2"
          />
          <Image
            alt="Nhat Linh Nguyen picture in a studio"
            src={profile_thinking}
            loading="lazy"
            className="object-cover rounded-lg h-full"
          />
        </div>
      </div>
    </>
  );
}

export default About;
