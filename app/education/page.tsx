"use client";
import Lottie from "lottie-react";
import educationAnimation from "@/public/education.json";
import Header from "@/app/ui/header";

export default function Education() {
  return (
    <>
      <Header />
      <main className="h-screen w-screen flex items-center flex-col justify-start">
        <h1 className="mt-20 font-bold text-[80px]">Education</h1>
        <Lottie
          animationData={educationAnimation}
          autoplay
          loop={false}
          style={{
            height: "100%",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </main>
    </>
  );
}
