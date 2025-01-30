import React, { FC } from "react";
import Head from "next/head";

interface HeadProps {
  title: string;
  description: string;
  keywords: string;
  favicon?: string; // Optional favicon prop
}
const toBoldText = (text: string) =>
  text
    .split("")
    .map((char) =>
      char.match(/[a-zA-Z]/) // Check if the character is a letter
        ? String.fromCharCode(char.charCodeAt(0) + 119743)
        : char // Keep non-alphabetic characters as is
    )
    .join("");
const Heading: FC<HeadProps> = ({ title, description, keywords, favicon }) => {
  const boldTitle = "𝗘𝗹𝗲𝘃𝗮𝘁𝗲";

  return (
  
     <>
       <title>{boldTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* ✅ Set Favicon */}
     
      
      {/* ✅ Alternative for `.png` icons */}
      <link 
        rel="icon" 
        href={favicon || "https://cdn.builder.io/api/v1/image/assets/TEMP/52b36090a44447a86a77abc7580c9213dc2ab96488c69450f72f927c385a15e1?placeholderIfAbsent=true&apiKey=1417e65b6bfe470f8cc9dc859d11b6ef"} 
        type="image/png"
      />
     </>
 
  );
};

export default Heading;
