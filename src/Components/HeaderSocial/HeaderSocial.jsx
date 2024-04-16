import "./HeaderSocial.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a target="_blank" href="https://github.com/AmmarAlNabtiti"><BsGithub /></a>
            <a target="_blank" href="https://www.linkedin.com/in/ammar-al-nabtiti-3ab912256"><BsLinkedin /></a>
            <a target="_blank" href="https://web.facebook.com/profile.php?id=100002956091847"><BsFacebook /></a>




        </div>
    );
};

export default HeaderSocial;