import {
  FaTwitter,
  FaInstagram,
  FaHome,
  FaRoute,
  FaBookReader,
} from "react-icons/fa";
export const navMenu = [
  { name: "Home", link: "/" },
  { name: "About", link: "AboutUs" },
  { name: "Road Map", link: "RoadMap" },
  {name:"Tokenomics",link:"Tokenomics"},
  {
    name: "Community",
    link: "Community",
    children: [
      {
        label: "Twitter",
        logo:"FaTwitter",
        href: "https://twitter.com/0xebulls?t=9UE4DenXOi4f6rIKg2SMYA&s=08",
      },
      {
        label: "Instagram",
        logo: "FaInstagram",
        href: "#",
      },
    ],
  },
];

export const socialLinks = {
  twitter: { logo: "FaTwitter", link: "" },
};
