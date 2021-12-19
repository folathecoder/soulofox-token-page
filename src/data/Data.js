import heroImage from "../images/home/placeholder.png";
import runningFox from "../images/home/running-fox.png";

export const heroData = {
  heading: "Let the Adventure Begin..",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur accusamus rerum ea.",
  button: {
    link: "#",
    text: "Get Started",
  },
  image: {
    imageSrc: heroImage,
    imageAlt: "",
  },
};

export const projectData = {
  heading: "Project Concept",
  text: "Members of our team are all big 2D RPG fans, so in this project we are aiming to build a RPG game where NFT owners can use their NFT as character in the game and earn FoxyCoin. The game will be a multiplayer game where foxians can socialize, level up through defeating enemies, join raids, earn FoxyCoin and much more. We want players to feel the nostalgia of 2D RPG and bring back memories that thrilled their heart in the past.",
  image: {
    imageSrc: runningFox,
    imageAlt: "running fox",
  },
};

export const footerData = {
  footerHeading: "Contact Us",
  footerText:
    "We would love to hear any feedback and would love to connect with the NFT community. Feel free to contact us with the following methods.",
  socials: [
    {
      id: 1,
      name: "Discord",
      icon: "fab fa-discord",
      link: "https://discord.gg/NSHrXBhk4F",
    },
    {
      id: 2,
      name: "Email",
      icon: "fas fa-envelope",
      link: "mailto:soulofox.nft@gmail.com",
    },
    {
      id: 3,
      name: "Youtube",
      icon: "fab fa-youtube",
      link: "https://www.youtube.com/channel/SoulofoxNFT",
    },
    {
      id: 4,
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/soulofoxNFT",
    },
    {
      id: 5,
      name: "Website",
      icon: "fas fa-link",
      link: "https://soulofox.com/",
    },
  ],
};
