'use client';
import Header from '../ui/header';
import Image from 'next/image';
import profile from '@/public/about.webp';
import profile_chaise from '@/public/profile-chaise.jpg';
import profile_music from '@/public/profile-music.jpg';
import profile_thinking from '@/public/profile_thinking.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Education from './education';
import Skills from './skills';
import Experience from './experience';

function About() {
  const { t } = useTranslation('common');
  return (
    <div
      id="about"
      className="flex items-center h-screen w-full relative justify-around px-24"
    >
      <div className="left w-[50%] flex flex-col justify-between">
        <h1 className="text-8xl font-bold mb-8">{t('about-title')}</h1>
        <p className="w-[80%] mb-8 font-medium leading-7">
          {t('about-description')}
        </p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-8">
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
  );
}

export default About;