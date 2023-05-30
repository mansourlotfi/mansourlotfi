import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore, AiFillMobile, AiFillBug } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";

const data = [
  {
    id: 1,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "I create stunning and responsive web designs that enhance your brand identity and user experience.‍",
  },
  {
    id: 2,
    icon: <AiFillMobile />,
    title: "Responsive web design and accessibility",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "I build secure and scalable web applications that power your online business and meet your performance needs.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Server setup, deployment and maintenance",
    desc: "I provide reliable and cost-effective server solutions that ensure your web applications run smoothly and securely.",
  },
  {
    id: 5,
    icon: <CgPerformance />,
    title: "Performance optimization and security",
    desc: "I optimize your web applications for speed and efficiency, and protect them from cyberattacks and data breaches.",
  },
  {
    id: 6,
    icon: <AiFillBug />,
    title: "Debugging and troubleshooting",
    desc: "I fix any bugs and errors that may affect your web applications, and ensure they run smoothly and flawlessly.",
  },
];

export default data;
