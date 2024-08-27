import Image, { StaticImageData } from 'next/image';

export default function Card(props: {
  link: string;
  image: StaticImageData;
  title: string;
  detail: string;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 lg:p-16">
      <a
        href={props.link}
        className="w-full sm:w-3/4 lg:w-1/2 h-full bg-[#e7e4d6] rounded-xl flex justify-start items-center flex-col p-4 sm:p-8 lg:p-12 hover:shadow-lg transition"
      >
        <Image
          src={props.image}
          alt=""
          className="w-full rounded-md mb-4 sm:mb-8 lg:mb-12"
        />
        <div className="description flex flex-col flex-shrink-0">
          <h2 className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-2 flex-1">
            {props.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">{props.detail}</p>
        </div>
      </a>
    </div>
  );
}
