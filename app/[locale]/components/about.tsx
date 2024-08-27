'use client';
import Image from 'next/image';
import profile from '@/public/about.webp';
import profile_chaise from '@/public/profile-chaise.jpg';
import profile_music from '@/public/profile-music.jpg';
import profile_thinking from '@/public/profile_thinking.jpg';
import { useTranslation } from 'react-i18next';
import Education from './education';
import Skills from './skills';
import Experience from './experience';

function About() {
  const { t } = useTranslation('common');
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center h-auto lg:h-screen w-full relative justify-around px-4 sm:px-8 lg:px-24 mb-12 lg:mb-0"
    >
      <div className="left w-full lg:w-[70%] flex flex-col justify-between mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 lg:mb-4">
          {t('about-title')}
        </h1>
        <div className="h-1 lg:h-3 bg-[#8e705b] w-32 mb-5"></div>
        <p className="w-full lg:w-[80%] mb-4 lg:mb-8 font-medium leading-7">
          {t('about-description')}
        </p>
        <ul className="w-3/4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <li>
            <Education />
          </li>
          <li>
            <Skills />
          </li>
          <li>
            <Experience />
          </li>
        </ul>
      </div>
      <div className="!aspect-square grid grid-cols-2 grid-rows-3 w-full lg:w-[40%] h-auto lg:h-[60%] gap-4 lg:gap-8 transition-all hover:gap-3">
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
  );
}

export default About;
