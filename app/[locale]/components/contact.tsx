'use client';
import Image from 'next/image';
import contactImage from '@/public/contact.png';
import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="min-h-screen w-screen flex items-center justify-center flex-col"
      >
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 font-bold">
          <h1 className="text-4xl sm:text-6xl lg:text-[120px] mb-0">Contact</h1>
          <div className="h-1 lg:h-3 bg-[#8e705b] w-32 ml-2 mb-10"></div>
          <Input
            type="email"
            label="Email"
            className="w-2/3 sm:w-2/3 mb-4 sm:mb-6 lg:mb-10"
            variant="bordered"
            labelPlacement="inside"
            placeholder="Enter your email"
            color="primary"
          />
          <Input
            label="Name"
            className="w-2/3 sm:w-2/3 mb-4 sm:mb-6 lg:mb-10"
            variant="bordered"
            labelPlacement="inside"
            placeholder="Enter your name"
            color="primary"
          />
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="w-2/3 sm:w-2/3"
            variant="bordered"
          />
          <Button className="mt-4 sm:mt-6 lg:mt-10">Submit</Button>
        </div>
      </div>
    </>
  );
}
