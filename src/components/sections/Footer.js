import React from "react";

const Footer = () => {
  return (
    <footer className="container min-h-500 bg- flex">
      <div className="flex-1 bg-blue-600">
        <div className="max-w-full bg-yellow-500">
          <h3 className="text-100">This is the footer heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet voluptates molestias sapiente .</p>
        </div>
      </div>
      <div className="flex-1 bg-gray-300">
        <div className="max-w-full bg-red-400">
          social icons
        </div>
      </div>
    </footer>
  );
};

export default Footer;
