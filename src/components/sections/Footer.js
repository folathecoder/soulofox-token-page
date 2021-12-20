import React from "react";

const Footer = ({ data }) => {
  return (
    <footer className="max-w-full bg-400 pt-10 pb-10">
      <div className="container flex flex-col lg:flex-row min-h-50 lg:items-center pt-5 pb-5">
        <div className="flex-1">
          <div>
            <div>
              <h3 className="text-500 text-xl">{data.footerHeading}</h3>
              <hr className="bg-200 h-1 border-transparent mt-1 w-10" />
            </div>
            <p className="max-w-md pt-3">{data.footerText}</p>
          </div>
        </div>
        <div className="flex-2 justify-end">
          <div>
            <ul className="flex flex-col mt-5 lg:mt-0 md:flex-row">
              {data.socials.map((social) => {
                return (
                  <li
                    key={social.id}
                    className="pt-2 pb-2 mr-5 lg:mr-0 lg:ml-5"
                  >
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-200"
                    >
                      <div className="flex items-center">
                        <div className="text-200">
                          <i className={social.icon}></i>
                        </div>
                        <p className="pl-3 hover:transiton-all">
                          {social.name}
                        </p>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
