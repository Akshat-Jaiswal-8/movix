import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";
import logo from "../../../assets/movix-logo.svg";
import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  return (
    <header className={"header"}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt={"logo"} />
        </div>
        <ul className={"menuItems"}>
          <li className={"menuItem"}>Movies</li>
          <li className={"menuItem"}>T.V. Shows</li>
          <li className={"menuItem"}>
            <HiOutlineSearch />
          </li>
        </ul>
        <div className={"mobileMenuItems"}>
          <HiOutlineSearch />
          {mobileMenu ? <SlMenu /> : <VscChromeClose />}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;
