import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [navbar, setnavbar] = useState(false);

  function two() {
    navbar == true ? setnavbar(false) : navbar == false ? setnavbar(true) : "";
  }

  return (
    <div className="col-12">
      <nav className="divNavbarBig">
        <div className="divPersonalImg"></div>
        <h1 className="h1divNavbarBig">Jackson Ford</h1>
        <h2 className="h2divNavbarBig">
          <span className="spandivNavbarBig">UI / UX / Designer</span> in
          Philippines
        </h2>
        <div className="divNavbarLinkss">
          <Link to="/home" className="linkDivNavbarLinks">
            Home
          </Link>
          <Link to="/about" className="linkDivNavbarLinks">
            About
          </Link>
          <Link to="/skills" className="linkDivNavbarLinks">
            Skills
          </Link>
          <Link to="/experience" className="linkDivNavbarLinks">
            Experience
          </Link>
          <Link to="/work" className="linkDivNavbarLinks">
            Works
          </Link>
        </div>
      </nav>

      <div className="col-12">
        <div className="col-12 divOpenNavbarBtn">
          <button
            onClick={() => {
              two();
            }}
            className="openNavbarBtn"
          >
            <GiHamburgerMenu
              style={{ fontSize: "1.5rem", color: "rgb(0 0 0 / 65%)" }}
            />
          </button>
        </div>

        {navbar ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="col-12 col-sm-7 col-md-6 divNavbarSmall"
          >
            <button
              onClick={() => {
                setnavbar(false);
              }}
              className="closeNavbarBtn"
            >
              X
            </button>

            <nav className="divNavbarSmallWidth">
              <div className="divPersonalImg"></div>
              <h1 className="h1divNavbarBig">Jackson Ford</h1>
              <h2 className="h2divNavbarBig">
                <span className="spandivNavbarBig">UI / UX / Designer</span> in
                Philippines
              </h2>
              <div className="divNavbarLinkss">
                <Link to="/home" className="linkDivNavbarLinks">
                  Home
                </Link>
                <Link to="/about" className="linkDivNavbarLinks">
                  About
                </Link>
                <Link to="/skills" className="linkDivNavbarLinks">
                  Skills
                </Link>
                <Link to="/experience" className="linkDivNavbarLinks">
                  Experience
                </Link>
                <Link to="/work" className="linkDivNavbarLinks">
                  Works
                </Link>
              </div>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
