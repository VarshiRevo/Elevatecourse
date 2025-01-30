import * as React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col justify-center self-stretch p-12 my-auto text-black bg-white min-w-[240px] rounded-[37px] shadow-[0px_0px_63px_rgba(0,0,0,0.07)] w-[658px] max-md:px-5 max-md:max-w-full">
    <img loading="lazy" src={imageSrc} alt={imageAlt} className="object-contain max-w-full rounded-2xl aspect-[2.23] w-[558px]" />
    <div className="flex flex-col mt-6 max-w-full w-[541px]">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-6 text-base max-md:max-w-full">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "Learning and leading through change",
      description: "At Supercode, we are passionate about empowering individuals and businesses through education. As a leading provider of online courses, we specialize in creating high-quality, accessible, and industry-relevant learning experiences. Our goal is to equip our learners with the tools and knowledge they need to succeed in an ever-evolving professional landscape.",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4065976c8f9fb6983a32f5b777cf6afa9af53103b7cfdfa74cd5f90a8a682954?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
      imageAlt: "Learning feature illustration"
    },
    // Add other features here
  ];

  return (
    <section className="flex flex-col py-24 w-full max-md:max-w-full">
      <div className="flex flex-col justify-center items-center self-center max-w-full w-[1079px]">
        <h2 className="text-6xl font-bold tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl">
          Skills are the key to unlocking potential
        </h2>
        <p className="mt-8 text-xl font-medium text-center capitalize text-neutral-500 w-[538px] max-md:max-w-full">
          Supercode offers expert-led online courses designed to upskill learners.
        </p>
      </div>
      <div className="flex overflow-hidden gap-5 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;