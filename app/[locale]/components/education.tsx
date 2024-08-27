'use client';
import Image from 'next/image';
import education from '@/public/education.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setOpen(true)}
        className="w-2/3 rounded-lg hover:text-[#faf7ea] text-[#8E705B] border-2 hover:border-transparent font-semibold hover:bg-[#8E705B] border-[#8E705B] bg-transparent py-3 flex items-center justify-center transition ease-in-out hover:shadow-lg"
      >
        {t('about-education')}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-full h-full flex items-center justify-center fixed top-1/2 left-1/2 bg-[#b0ada08c] z-50 !transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-lg text-black"
            key={'cv'}
            layoutId={'cv'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full h-screen bg-transparent absolute top-0 left-0 z-0"
              onClick={() => setOpen(false)}
            ></motion.div>
            <motion.div className="w-3/4 h-5/6 flex flex-col items-start justify-start bg-[#fcfaf1] overflow-y-auto p-8 rounded-lg z-10">
              <motion.div className=" flex flex-col items-center justify-start">
                <h1 className="my-5 font-bold text-[80px] text-[#8E705B]">
                  {t('about-education').toUpperCase()}
                </h1>
                <Image
                  src={education}
                  alt="education tree"
                  className="mb-32 w-2/3"
                />
              </motion.div>
              <motion.button
                className="absolute top-4 right-4 bg-[#8e705b] rounded-full p-2"
                onClick={() => setOpen(false)}
              >
                <IoMdClose color="#d9d6c8" className="stroke-[20px]" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
