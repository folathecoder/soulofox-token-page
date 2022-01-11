import React from "react";
import { Link } from "react-scroll"

const Header = ({ data }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link  activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500}
              className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <img src={data.soulofoxLogoImage.imageSrc} alt="" srcset="" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link  activeClass="active" to="concept" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link1.text}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  activeClass="active" to="nft" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link2.text}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  activeClass="active" to="foxycoin" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link3.text}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  activeClass="active" to="wallet" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link4.text}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  activeClass="active" to="etfgamefi" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link5.text}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link  activeClass="active" to="roadmap" spy={true} smooth={true} offset={-50} duration={500}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  href={data.link1.link}
                >
                  <span className="ml-2">{data.link6.text}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
