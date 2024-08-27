import Image from 'next/image';
import Header from '../ui/header';
import { TypewriterEffect } from '../ui/typewriter-effect';
import CV from './cv';

const words = [
  { text: 'Nhat', className: 'text-[#8E705B] ' },
  { text: 'Linh', className: 'text-[#8E705B] ' },
  { text: 'NGUYEN', className: 'text-[#8E705B] ' },
];
const words2 = [
  { text: 'FRONT-END', className: 'text-[#8E705B] ' },
  { text: 'DEVELOPER', className: 'text-[#8E705B] ' },
];

export default function Home() {
  return (
    <>
      <div className="h-[80vh] w-full flex flex-col justify-center items-center font-semibold ">
        <TypewriterEffect words={words} className="mb-5" />
        <TypewriterEffect words={words2} />
        <CV />
      </div>
    </>
  );
}
