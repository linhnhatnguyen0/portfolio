"use client";
import Lottie from "lottie-react";
import educationAnimation from "@/public/education.json";

export default function Education() {
  return (
    <>
      <main >
        <Lottie animationData={educationAnimation} autoplay loop={false} />
      </main>
    </>
  );
}
