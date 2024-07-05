'use client';
import Lottie from 'lottie-react';
import Header from '../ui/header';
import skillAnimation from '@/public/skills.json';

export default function Skills() {
  return (
    <>
      <div className="h-screen w-full flex items-center flex-col justify-start fixed top-0 left-0 ">
        <Lottie
          animationData={skillAnimation}
          autoplay
          loop={true}
          style={{
            height: '70%',
            width: '70%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }}
        />
      </div>
    </>
  );
}
