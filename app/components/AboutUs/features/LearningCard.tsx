import * as React from 'react';

interface LearningCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description
}) => {
  return (
    <article className="flex flex-col justify-center self-stretch p-12 my-auto text-black bg-white min-w-[240px] rounded-[37px] shadow-[0px_0px_63px_rgba(0,0,0,0.07)] w-[658px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain max-w-full rounded-2xl aspect-[2.23] w-[558px]" />
      <div className="flex flex-col mt-6 max-w-full w-[541px]">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-6 text-base max-md:max-w-full">{description}</p>
      </div>
    </article>
  );
};