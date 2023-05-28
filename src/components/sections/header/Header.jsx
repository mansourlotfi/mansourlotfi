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
        <div className="header__item">
          <h3 data-aos="fade-up">Mansour Lotfi</h3>
          <p className="header_explain" data-aos="fade-up">
            I am a full-stack developer. I have experience in building scalable,
            secure and reliable web applications using various frameworks and
            technologies. I enjoy solving complex problems and learning new
            skills. I am passionate about creating high-quality code that
            follows best practices and industry standards. I am always looking
            for new challenges and opportunities to grow as a developer.
          </p>
          <div className="typeWriter">
            <TypeWriter />
          </div>
          <div className="header__cta" data-aos="fade-up">
            <a href="#contact" className="btn primary">
              Let&apos;s Talk
            </a>
            <a href="#portfolio" className="btn light">
              My Work
            </a>
          </div>
        </div>
        <div className="header__item">
          <div className="homepage-first-area-right-side">
            <div className="header__profile" data-aos="fade-in">
              <div className="homepage-image-wrapper">
                <Image
                  src="/assets/header.jpg"
                  alt="Header Portait"
                  fill
                  className="homepage-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header__socials" data-aos="fade-in">
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
