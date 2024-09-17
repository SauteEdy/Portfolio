import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
export default function Nav(){
    return(
        <>
            <nav className="flex-none flex flex-row bg-white border-b border-black  items-center fixed top-0 left-0 right-0 justify-evenly w-full h-12=6 text-black pt-4">
                 <h1 style={{fontFamily:"'Abril Fatface', serif",fontSize:"3rem"}}>ES</h1>
                 <ul className="flex flex-row">
                    <li >
                            <Link to="home" offset={-100} smooth={true} duration={1000} style={{fontFamily:"'EB Garamond', serif"}} className="pl-10 cursor-pointer">
                                HOME
                            </Link>
                    </li>
                    <li>
                            <Link to="about" offset={-200} smooth={true} duration={1000} style={{fontFamily:"'EB Garamond', serif"}} className="pl-10 cursor-pointer">
                                ABOUT
                            </Link>
                    </li>
                    <li >
                            <Link to="skills" offset={-100} smooth={true} duration={1000} style={{fontFamily:"'EB Garamond', serif"}} className="pl-10 cursor-pointer">
                                SKILLS
                            </Link>
                    </li>
                    <li >
                            <Link to="footer"  smooth={true} duration={1000} style={{fontFamily:"'EB Garamond', serif"}} className="pl-10 cursor-pointer">
                                CONTACT
                            </Link>
                    </li>
                 </ul>
                <ul className="flex flex-row">
                    <li className="pl-5">
                        <a href="https://www.linkedin.com/in/edmilson-saúte-662a14299" target="_blank">
                            <FaLinkedin style={{fontSize:"1.5rem"}}/>
                        </a>
                    </li>
                    <li className="pl-5">
                        <a href="https://github.com/SauteEdy?tab=repositories" target="_blank">
                            <FaGithub style={{fontSize:"1.5rem"}}/>
                        </a>
                    </li>
                    <li className="pl-5">
                        <a href="#">
                            <FaFacebook style={{fontSize:"1.5rem"}}/>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};