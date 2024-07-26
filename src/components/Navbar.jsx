import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mx-7 w-10 text-2xl">HA</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/heinric-alfred/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/heinric11/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;