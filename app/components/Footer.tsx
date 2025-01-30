import { SocialIcon } from './SocialIcon';
import { FooterSection } from './FooterSection';

const Footer: React.FC = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/409d68e8183e9293212b7f858deb34e9c3cae2b664aa5b279d1c3f074b52c740?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e", alt: "Facebook", href:"https://www.facebook.com"},
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d68758d9de9f1180c3dc206cdde86f4c6657127ac2b9b29fe73d246f43fdfd58?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e", alt: "Twitter",href:"https://x.com" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff8b8ea0e131a75a684de7bc5ba3c47f268b0a76eb4031c1140b67911fdc1576?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e", alt: "LinkedIn",href:"https://www.linkedin.com" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/caf72cc887402509ab1b6922a44be809651a16b1b0a147f888044d61cd70df33?placeholderIfAbsent=true&apiKey=c48d9b50468c496f834245b48efcd26e", alt: "Instagram",href:"https://www.instagram.com" }
  ];

  const aboutlinks = [
    { name: "Our Story", href: "/about" },
    {name : "Profile", href:"/profile"},
    {name : "Privacy Policy", href:"/privacy-policy"},
    {name : "Course Dashboard", href:"/course-dashboard"},
    { name: "FAQ", href: "/faq" },
  ];

  const serviceLinks = [

    { name: "Meet", href: "/meet" },
    { name: "Course", href: "/courses" },
    { name: "Quiz", href: "/quiz" },
    { name: "Supercode", href: "/supercode" },
    { name: "Policy", href: "/policy" },
  ];

  return (
    <>
      <footer className="flex flex-col items-center justify-center w-full px-10 mt-10  bg-white">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between w-full max-w-screen-xl gap-10">
          {/* Left Section (Logo and Description) */}
          <div className="flex flex-col items-start max-w-[240px]">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Elevate
            </h1>
            <p className="mt-4 text-[20px] text-gray-500">
              It is a long established fact that a reader will be distracted lookings.
            </p>
            <div className="flex gap-4 mt-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </div>
          </div>

          {/* Middle Section (Pages and Services Links) */}
          <div className="flex flex-wrap gap-16 ml-20">
            <FooterSection
              title="About"
              links={aboutlinks.map((link) => link.name)} // Transform to string array
            />

            <FooterSection
              title="Quick Links"
              links={serviceLinks.map((link) => link.name)} // Transform to string array
            />


          </div>

          {/* Right Section (Contact Information) */}
          <div className="flex flex-col items-start max-w-[240px]">
            <h3 className="text-2xl font-bold">Contact</h3>
            <address className="mt-4 text-lg text-gray-500 not-italic">
              <a href="mailto:supercode@gmail.com" className="block">elevate@gmail.com</a>
              <a href="tel:+1234567890" className="block mt-2">(123) 456 - 7890</a>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full mt-12 text-center text-sm text-gray-400">
          <p>Copyright © 2024 Camos Lab | All Rights Reserved</p>
        </div>

        {/* Decorative Gradient at the Bottom */}

      </footer>
      <div className="flex mt-8 w-full bg-[linear-gradient(82deg,#D82DFD_17.77%,#A93BFF_30.02%,#8C3CFF_58.49%,#5633FF_70.29%)] min-h-[10px] max-md:max-w-full" />
    </>
  );
};

export default Footer;