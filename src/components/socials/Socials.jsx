import "./socials.css";
import GitHub from "../../assets/icons/github.png";
import PortFolio from "../../assets/icons/portfolio.png";

const Socials = () => {
  const items = [
    {
      id: 1,
      name: "GitHub Repo",
      link: "https://github.com/jtayped/meditation-app",
      icon: GitHub,
    },
    {
      id: 2,
      name: "Web Development Portfolio",
      link: "https://jtayped.github.io/",
      icon: PortFolio,
    },
  ];
  return (
    <ul className="socials">
      {items.map((item) => (
        <li>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
