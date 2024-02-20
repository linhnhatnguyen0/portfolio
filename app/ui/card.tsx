import Image, { StaticImageData } from "next/image";

export default function Card(props: {
  link: string;
  image: StaticImageData;
  title: string;
  detail: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <a
        href={props.link}
        className="w-3/4 h-full bg-[#556A65] rounded-xl flex justify-start items-center flex-col p-8 hover:shadow-2xl transition"
      >
        <Image src={props.image} alt="" className="w-full rounded-md mb-12" />
        <div className="description flex flex-col flex-shrink-0">
          <h2 className="font-semibold text-2xl mb-2 flex-1">{props.title}</h2>
          <p>{props.detail}</p>
        </div>
      </a>
    </div>
  );
}
