import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "./NavBar.css";
import { useState } from "react";

const NavBar = (Props) => {
  const [openMenu, SetOpenMenu] = useState(false);

  const toggelMenu = () => {
    SetOpenMenu(!openMenu);
  };
  // const appClassName = changeMode ? "light-mode" : "dark-mode";
  return (
    <div className={`nav-section`}>
      <div className="container">
        <div className="navbar_content">
          <div className="logo">
            <a href="/" className={`${Props.aTage}`}>
              Mohsin
            </a>
          </div>
          <div className="responsive-icon">
            <button className="menu-btn" onClick={toggelMenu}>
              {openMenu ? (
                <RxCross1 size={30} className="cross_btn" />
              ) : (
                <CiMenuFries size={30} />
              )}
            </button>

            {openMenu && (
              <nav className="nav__option">
                <ul className="navbar__list">
                  <li className="navbar_items">Home</li>
                  <li className="navbar_items">About</li>
                  <li className="navbar_items">PortFolio</li>
                  <li className="navbar_items">Contact</li>
                </ul>
              </nav>
            )}
            <nav className="nav__desktop ">
              <ul className="navbar__list">
                <li className="navbar_items">
                  <a href="#home" className={`navbar_link ${Props.color}`}>
                    Home
                  </a>
                </li>
                <li className="navbar_items">
                  <a href="#about" className={`navbar_link ${Props.color}`}>
                    About
                  </a>
                </li>
                <li className="navbar_items">
                  <a href="#portfolio" className={`navbar_link ${Props.color}`}>
                    PortFolio
                  </a>
                </li>
                <li className="navbar_items">
                  <a href="#service" className={`navbar_link ${Props.color}`}>
                    Service
                  </a>
                </li>
                <li className="navbar_items">
                  <a href="#exprience" className={`navbar_link ${Props.color}`}>
                    Experience
                  </a>
                </li>
                <li className="navbar_items">
                  <a href="#contact" className={`navbar_link ${Props.color}`}>
                    Contact
                  </a>
                </li>
                <div className="btn_dark">
                  <button onClick={Props.onClick} className={`${Props.color}`}>
                    {Props.isDark ? (
                      <MdOutlineDarkMode size={25} />
                    ) : (
                      <MdOutlineLightMode size={25} />
                    )}
                  </button>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
