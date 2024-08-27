'use client';
import { TypewriterEffect } from '../ui/typewriter-effect';
import CV from './cv';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const words = [
    { text: 'Nhat', className: 'text-[#8E705B] ' },
    { text: 'Linh', className: 'text-[#8E705B] ' },
    { text: 'NGUYEN', className: 'text-[#8E705B] ' },
  ];
  const word1 = t('hero-title').split(' ')[0];
  const word2 = t('hero-title').split(' ')[1];

  const words2 = [
    { text: word1, className: 'text-[#8E705B] ' },
    { text: word2, className: 'text-[#8E705B] ' },
  ];

  return (
    <>
      <div className="h-[80vh] w-full flex flex-col justify-center items-center font-semibold">
        <TypewriterEffect
          words={words}
          className="mb-5 text-4xl sm:text-5xl lg:text-8xl"
        />
        <TypewriterEffect
          words={words2}
          className="text-4xl sm:text-5xl lg:text-8xl"
        />
        <CV />
      </div>
    </>
  );
}
