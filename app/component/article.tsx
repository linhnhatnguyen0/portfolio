'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { IoMdClose } from 'react-icons/io';
import Markdown from 'react-markdown';
import remarkImages from 'remark-images';

export default function Article(props: {
  id: string;
  image: StaticImageData;
  content: string;
  date: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.div
        className="w-full h-full flex items-center justify-center"
        key={props.id}
        layoutId={props.title}
        onClick={() => setOpen(true)}
      >
        <motion.div className="w-3/4 h-full bg-[#e7e4d6] rounded-xl flex justify-start items-center flex-col p-8 hover:shadow-lg transition">
          <Image src={props.image} alt="" className="w-full rounded-md mb-12" />
          <div className="description flex flex-col flex-shrink-0">
            <h2 className="font-semibold text-2xl mb-2 flex-1">
              {props.title}
            </h2>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="w-full h-full flex items-center justify-center fixed top-1/2 left-1/2 bg-[#b0ada08c] z-50 !transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-lg text-black"
            key={props.id}
            layoutId={props.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={() => setOpen(false)}
          >
            <motion.div className="w-4/5 h-5/6 flex flex-col items-start justify-start bg-[#ece9dc] overflow-y-auto p-10 rounded-lg">
              <motion.h1 className="mb-8 text-5xl">{props.title}</motion.h1>
              <motion.div className="mt-8">
                <Markdown
                  remarkPlugins={[remarkImages]}
                  children={props.content}
                  className={'markdown'}
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
    </div>
  );
}
