import Image from "next/image";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "@/context/modal-context";
import "./navbar.css";

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="" className="nav__logo">
          <Image
            src={"/logo.jpg"}
            alt="Logo"
            width={40}
            height={40}
            className="nav__logo"
          />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
