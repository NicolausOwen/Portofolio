import React from 'react';

const Header = () => {
  return (
    <div className="sticky top-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md border-b border-gray-200 w-full z-10">
      <div className="max-w-7xl md:max-w-3xl lg:max-w-[60vw] mx-auto px-10 h-full flex justify-between items-center py-3">
        <div className="flex items-center">
          <a href="#info" className="flex items-center">
            <div className="rounded-full overflow-hidden w-8 h-8 z-10">
            </div>
            <div className="">Profile Info</div>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#projects" className="flex items-center bg-transparent rounded-full px-4 py-2">
            <p className="text-sm text-gray-800">Projects</p>
          </a>
          <a href="#info" className="flex items-center bg-black text-white rounded-full px-4 py-2">
            <p className="text-sm">Let's Talk</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;