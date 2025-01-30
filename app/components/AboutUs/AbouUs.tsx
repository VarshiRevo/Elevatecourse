import * as React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col justify-center px-20 py-10 w-full text-2xl text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-center px-5 py-12 w-full bg-white rounded-[37px] shadow-[0px_0px_63px_rgba(0,0,0,0.07)] max-md:max-w-full">
        <div className="grow shrink self-stretch my-auto w-[740px] max-md:max-w-full">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="mt-4">
            At Supercode, we are passionate about empowering individuals and businesses through education. As a leading provider of online courses, we specialize in creating high-quality, accessible, and industry-relevant learning experiences. Our goal is to equip our learners with the tools and knowledge they need to succeed in an ever-evolving professional landscape.
          </p>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3cb2402fe7a11a84406e36a2227de8fb01c351605249677df9bcd23477e4e53?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e" alt="About us illustration" className="object-contain grow shrink self-stretch my-auto rounded-2xl aspect-[0.99] min-w-[240px] w-[231px]" />
      </div>
    </section>
  );
};

export default AboutUs;