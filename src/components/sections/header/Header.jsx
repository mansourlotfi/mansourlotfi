import Image from "next/image";
import { useEffect } from "react";
import data from "./data";
import AOS from "aos";
import TypeWriter from "./TypeWriter";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <Image src="/assets/header.jpg" alt="Header Portait" fill />
        </div>
        <h3 data-aos="fade-up">Mansour Lotfi</h3>
        <TypeWriter />
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let&apos;s Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
