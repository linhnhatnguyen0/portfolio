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
        className="h-screen w-full flex items-center justify-end"
      >
        <div className="h-screen flex-col justify-center items-center w-1/2 font-bold">
          <h1 className="text-[120px] mb-0">Contact</h1>
          <div className="h-3 bg-[#8e705b] w-32 ml-2 mb-10"></div>
          <Input
            type="email"
            label="Email"
            className="w-2/3 mb-10"
            variant="bordered"
            labelPlacement="inside"
            placeholder="Enter your email"
            color="primary"
          />
          <Input
            label="Name"
            className="w-2/3 mb-10"
            variant="bordered"
            labelPlacement="inside"
            placeholder="Enter your name"
            color="primary"
          />
          <Textarea
            label="Description"
            placeholder="Enter your description"
            className="w-2/3"
            variant="bordered"
            labelPlacement="inside"
            color="primary"
            minRows={10}
          />
          <Button className="mt-10 font-bold text-[#faf7ea]" color="primary">
            Submit
          </Button>
        </div>
        <div className="h-screen w-[45%]">
          <Image
            src={contactImage}
            alt="contact-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
