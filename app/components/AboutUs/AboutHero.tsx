import * as React from 'react';
import Image from 'next/image';

const AboutHero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center py-10 px-6 md:px-14 w-full">
      <div className="flex flex-col w-full max-w-[1276px]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-black">
          <span className='dark:text-white'>A Skill boosting agency</span> <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#EA5BEB,#4B57F5)]">Elevate</span>⚡
        </h1>
        <p className="mt-6 md:mt-10 text-lg md:text-xl font-medium text-neutral-500">
          Supercode offers expert-led online courses designed to upskill learners. Accessible, flexible, and industry-relevant, we help individuals and professionals achieve their learning goals anytime, anywhere.
        </p>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-10 items-center mt-8 md:mt-12">
        <p className="text-sm font-medium leading-6 text-black dark:text-white">
          Trusted by the world&apos;s biggest brands
        </p>
        <div className="flex gap-4 md:gap-7 items-center">
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa23c51b01cf5c930971ce7e4772bfba1418cbf4f759888a89d72fc6592f4a" alt="Brand Logo" width={108} height={33} className="object-contain"/>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6058317fdcb4d8150c33e11922e810aa22ba4a604cd70b3a581b0550a6fc0eb" alt="Brand Logo" width={115} height={33} className="object-contain"/>
          <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/50035cbc50e972bd1ebad7659fa3fd1042d159b3961f379a58f2079854aeaffb" alt="Brand Logo" width={98} height={33} className="object-contain"/>
        </div>
      </div>
      <Image 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/11d5bb59a6d19a9d90464de83bb4c7bf572fb15de4da9758eedc04832da9bbe1" 
        alt="Hero illustration" 
        width={1325} 
        height={370} 
        className="object-contain self-center mt-6 md:mt-8 w-full"
      />
    </section>
  );
};

export default AboutHero;
