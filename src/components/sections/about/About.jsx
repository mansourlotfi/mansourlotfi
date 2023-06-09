import Image from "next/image";
// import CV from "/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "@/components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <Image
              src="/assets/about.jpg"
              alt="About Image"
              height={600}
              width={200}
            />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi, I&apos;m Mansour Lotfi from Tehran, Iran. I&apos;m a full-stack
            web developer and a master degree student in Computer Science. I can
            build you a website or web app that meets your business needs, with
            a high-quality design and all the functionality you need to run
            smoothly online. Contact me today with your project details and
            let&apos;s get to work! You can see my resume below!
          </p>
          <a
            href={"/assets/mansour lotfi.pdf"}
            download
            className="btn primary"
          >
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
