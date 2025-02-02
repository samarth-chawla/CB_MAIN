import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaGithub size={30} />,
      href: "https://github.com/samarth-chawla",
    },
    {
      id: 2,
      child: <FaLinkedin size={30} />,
      href: "https://linkedin.com/company/campus-blocks-bvp",
    },
    {
      id: 3,
      child: <FaInstagram size={30} />,
      href: "https://instagram.com/campusblocksbvp",
    },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Campus Blocks</h2>
            <p className="text-gray-400">Innovate. Create. Inspire.</p>
          </div>
          
          <div className="flex gap-4">
            {links.map(({ id, child, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white duration-300"
              >
                {child}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Campus Block. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;