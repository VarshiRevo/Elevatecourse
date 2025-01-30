import * as React from 'react';
import { LearningCard } from '../features/LearningCard';
import { VideoCard } from '../features/VideoCard';

const cardData = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4065976c8f9fb6983a32f5b777cf6afa9af53103b7cfdfa74cd5f90a8a682954?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
    imageAlt: "Learning through change illustration",
    title: "Learning and leading through change",
    description: "At Supercode, we are passionate about empowering individuals and businesses through education. As a leading provider of online courses, we specialize in creating high-quality, accessible, and industry-relevant learning experiences. Our goal is to equip our learners with the tools and knowledge they need to succeed in an ever-evolving professional landscape."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ec5bcdca2febc3ae3c9fc85674f1dfacbdf010e3146017cffead00510539b62?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e",
    imageAlt: "Learning illustration",
    title: "Learning and leading through change",
    description: "At Supercode, we are passionate about empowering individuals and businesses through education. As a leading provider of online courses, we specialize in creating high-quality, accessible, and industry-relevant learning experiences. Our goal is to equip our learners with the tools and knowledge they need to succeed in an ever-evolving professional landscape."
  }
];

export const LearningSection: React.FC = () => {
  return (
    <main className="flex overflow-hidden gap-5 justify-center items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
      <LearningCard {...cardData[0]} />
      <VideoCard 
        title="Learning and leading through change"
        description="At Aymar, we are passionate about empowering individuals and businesses through education. As a leading provider of online courses, we specialize in creating high-quality, accessible, and industry-relevant learning experiences."
      />
      <LearningCard {...cardData[1]} />
    </main>
  );
};