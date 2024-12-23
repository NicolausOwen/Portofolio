import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-700 p-4">
      <div className="p-8 font-sans text-center">
      <h2 className="text-xl font-semibold">Ready to take the next step?</h2>
      <h1 className="text-2xl font-bold mt-2">
        Let’s build something incredible, together.
      </h1>
      <p className="text-gray-600 mt-4">
        Let’s connect if you’re looking to create a website, optimize your web app, or need assistance with development tasks.
      </p>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="text-[12px] lg:text-lg md:text-md px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
          Open for Projects - Let’s Talk
        </button>
        <button className="text-[12px] lg:text-lg md:text-md px-6 py-2 bg-gray-100 border border-gray-300 font-medium rounded-full hover:bg-gray-200 transition">
          Copy Email
        </button>
      </div>
      <p className="text-sm text-gray-500 my-10">
        Built with React | ©2024 by Nicolaus Owen Marvell
      </p>
    </div>
    </footer>
  );
}

export default Footer;