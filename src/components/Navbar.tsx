import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="font-sans relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-300 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900"
              href="#pablo"
            >
              ACS-Knowledge camp 2022
            </a>
            <button
              className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75"
                  href="#Vote"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-slate-900 opacity-75"></i>
                  <span className="ml-2">Vote</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75"
                  href="#scorboard"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-slate-900 opacity-75"></i>
                  <span className="ml-2">Scoreboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-900 hover:opacity-75"
                  href="#contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-slate-900 opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
