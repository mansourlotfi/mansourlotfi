import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:mansourlotfi@gmail.com" },
  {
    id: 2,
    icon: <RiMessengerLine />,
    link: "https://www.messenger.com/t/100087217880007",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+989113360715" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B989113360715

export default data;
