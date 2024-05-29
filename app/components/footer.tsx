import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-gray-400 text-center">
      <div className="container mx-auto">
        <p className="mb-2">CineNex - Your ultimate movie site with trailers</p>
        <p className="mb-2">Developed by Yanga Rubushe</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/YangaRubushe" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          </a>
          <a href="https://x.com/YangaRubushe" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
