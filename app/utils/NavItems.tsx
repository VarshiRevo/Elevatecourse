import Link from "next/link";
import React, { useState } from "react";
import './n.css';
import Image from "next/image";
type Props = {
  activeItem: number;
  isMobile: boolean;
};

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Products",
    url: "#", // Products will have a dropdown, so no direct link
    subItems: [
      {
        name: "Quiz",
        url: "https://elevatequiz.netlify.app",
      },
      {
        name: "Compiler",
        url: "https://elevatecompiler.netlify.app",
      },
    ],
  },
  {
    name: "Meet",
    url: "https://elevatemeet.netlify.app",
  },
  {
    name: "About",
    url: "/about",
  },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => item.subItems && setDropdownOpen(true)}
            onMouseLeave={() => item.subItems && setDropdownOpen(false)}
          >
            {item.name === "Meet" ? (
              <Link href={item.url} passHref>
                <div className="relative flex items-center">
                  <div className="inline-flex items-center justify-center px-5 h-[38px] bg-black rounded-full">
                    <span
                      className="text-[18px] font-Poppins font-bold text-transparent bg-gradient-to-r from-[#EDC850] via-[#6DCE8B] to-[#EDC850] bg-clip-text animate-gradient"
                    >
                      MEET
                    </span>
                  </div>
                </div>


              </Link>
            ) : (
              <Link href={item.url} passHref>
                <div className="relative flex items-center">
                  <div className="inline-flex items-center justify-center h-[38px] bg-transparent rounded-full">
                    <span
                      className={`${activeItem === index
                        ? "dark:text-[#37a39a] text-[crimson]"
                        : "dark:text-white text-black"
                        } text-[18px] px-6 font-Poppins font-[400] cursor-pointer`}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>

              </Link>
            )}


            {/* Dropdown Menu */}
            {item.subItems && dropdownOpen && (
              <div className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md w-48 z-10">
                {item.subItems.map((subItem, subIndex) => (
                  <Link href={subItem.url} key={subIndex} legacyBehavior passHref>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white text-black"
                    >
                      {subItem.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="800px:hidden mt-5">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref>
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b36090a44447a86a77abc7580c9213dc2ab96488c69450f72f927c385a15e1?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e"
                alt="Levate logo"
                width={87} // Set appropriate width
                height={67} // Set appropriate height
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.3]"
              />
            </Link>
          </div>
          {navItemsData.map((item, index) => (
            <div key={index}>
              <Link href={item.url} passHref>
                <span
                  className={`${activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                    } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                >
                  {item.name}
                </span>
              </Link>

              {/* Mobile Dropdown */}
              {item.subItems && (
                <div className="ml-6">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link href={subItem.url} key={subIndex} passHref>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 text-black dark:text-white"
                      >
                        {subItem.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;