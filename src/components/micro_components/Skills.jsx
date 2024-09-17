import { DiResponsive } from "react-icons/di";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Skills() {
    return (
        <>
            <div className="flex-none flex flex-col justify-center w-full h-3/4 bg-slate-800 text-white ">
                <h4
                    style={{
                        fontFamily: '"Noto Serif Display", serif',
                        fontSize: "3rem",
                    }}
                    className="pt-4 pl-11 text-center"
                >
                    SKILLS
                </h4>
                <p className='pt-5 font-mono tracking-normal text-center'>I always strive to give my best in what I do with the goal of delivering exceptionally well-done work!</p>
                <div className="w-4/5 h-3/4 mb-12 flex-none flex flex-row mx-auto justify-evenly">
                    <div className="flex-none flex flex-col justify-center mt-6 w-3/12 h-full bg-slate-700 rounded shadow-sm">
                        <MdOutlineDesignServices className="text-slate-300 pt-8 text-center mx-auto mb-9" style={{fontSize:'7rem'}}/>
                        <p style={{ fontFamily: '"Abel", sans-serif', fontSize:'1rem' }} className="text-slate-300 text-center">
                            Graphic Design work using the best tools in the market : Adobe Photoshop | Illustrator | Figma
                        </p>
                    </div>
                    <div className="flex-none flex flex-col justify-center mt-6 w-3/12 h-full bg-slate-700 rounded shadow-sm">
                        <IoCodeSlash className="text-slate-300 pt-8 text-center mx-auto mb-9" style={{fontSize:'7rem'}}/>
                        <p style={{ fontFamily: '"Abel", sans-serif', fontSize:'1rem' }} className="text-slate-300 text-center">
                            Custom Software Development using modern technology
                        </p>
                    </div>
                    <div className="flex-none flex flex-col justify-center mt-6 w-3/12 h-full bg-slate-700 rounded shadow-sm">
                        <DiResponsive className="text-slate-300 pt-8 text-center mx-auto mb-9" style={{fontSize:'7rem'}}/>
                        <p style={{ fontFamily: '"Abel", sans-serif', fontSize:'1rem' }} className="text-slate-300 text-center">
                            Responsive Design so your bussiness can be acessed through every device
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};