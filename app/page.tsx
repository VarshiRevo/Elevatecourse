"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
// import Reviews from "./components/Route/Reviews";
// import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import { ReviewMain } from "./components/comments/RemoveMain";


import { CurriculumSection } from "./components/Curriculum/CurriculumSection";
import { HeroSection } from "./components/Hero/HeroSection";
import { HeroTitle } from "./components/comments/HeroTitle";
interface Props { }

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Elevate"
        description="Elevate is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning"
        favicon="https://cdn.builder.io/api/v1/image/assets/TEMP/52b36090a44447a86a77abc7580c9213dc2ab96488c69450f72f927c385a15e1?placeholderIfAbsent=true&apiKey=1417e65b6bfe470f8cc9dc859d11b6ef" // Optional custom favicon
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <CurriculumSection />
      <Courses />
      <HeroSection
        title="Discover the best features needed for you"
        subtitle="productivity on hands from aimer code"
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/9af687f0ffa7d286e12597b09b46671da4bd86ed9459c49e17d3f9ccc01b137a?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
      />
      <HeroTitle
         titleLine1="A Skill - Building Journey"
         titleLine2="With Elevate"
         subtitle="In our basic exploration UI/UX design course, you'll learn the fundamentals of"
      />
     
      <ReviewMain />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Page;