import * as React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export const Abouttext: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col justify-center items-center self-center w-full px-4">
      <h1 className="text-6xl font-bold tracking-tighter leading-none text-black max-md:text-4xl text-center">
        {title}
      </h1>
      <p className="mt-8 text-xl font-medium text-center text-neutral-500 max-w-[90%] md:max-w-[538px]">
        {subtitle}
      </p>
    </section>
  );
};
