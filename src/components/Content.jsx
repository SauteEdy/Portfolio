import { Element } from "react-scroll";
import About from "./micro_components/About";
import Footer from "./micro_components/Footer";
import Home from "./micro_components/Home";
import Nav from "./micro_components/Nav";
import Skills from "./micro_components/Skills";
export default function Content(){
    return(
        <>
           <div className="flex flex-col  w-full h-screen">
                <Nav/>
                <Element name="home" className="flex-none w-full h-4/5 custom-bg-home text-center mt-20">
                     <Home/>
                </Element>
                <Element name="about" className="flex-none w-full h-2/4 bg-white flex flex-row justify-evenly">
                    <About/>
                </Element>
                <Element name="skills" className="flex-none flex flex-col justify-center w-full h-3/4 bg-slate-800 text-white ">
                    <Skills/>
                </Element>
                <Element name="footer" className="flex-none w-full h-3/4 bg-white flex flex-row">
                    <Footer/>
                </Element>
           </div>
        </>
    );
};