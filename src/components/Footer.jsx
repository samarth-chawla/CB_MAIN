import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
      <div className="mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-1">
            <div>
              <img src="logo.png" alt="" className='h-10' />
            </div>
            <div>
              <h2 className="text-2xl font-bold"><span className='text-[#c1121d]'>C</span>ampus <span className='text-[#c1121d]'>B</span>locks</h2>
              <p className="text-gray-400">Innovate. Create. Inspire.</p>
            </div>
          </div>
          <div className="flex justify-center mt-6 relative md:right-12 bottom-5 md:bottom-2">
            <a href='https://chat.whatsapp.com/Da2ABvAUxjZ7Dn7sGvVGOT' target="_blank" className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-green-600 transition duration-300">
              <FaWhatsapp size={24} />
              Join Support Group
            </a>
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