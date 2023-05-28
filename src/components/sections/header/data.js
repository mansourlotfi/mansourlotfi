import { AiFillLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const data = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/mansourlotfi",
    icon: <AiFillLinkedin />,
  },
  {
    id: 2,
    link: "https://stackoverflow.com/users/12311697/mansour-lotfi",
    icon: <FaStackOverflow />,
  },
  {
    id: 3,
    link: "https://gitlab.com/mansourlotfi",
    icon: <AiFillGitlab />,
  },
  { id: 4, link: "https://github.com/mansourlotfi", icon: <AiFillGithub /> },
];

export default data;
