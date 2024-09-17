
import { useRef } from "react";

export default function Footer(){
    const form = useRef();
    
    return(
        <>
            <footer className="flex-none w-full h-3/4 bg-white flex flex-row">
                <div className="flex-1 flex flex-col ml-12">
                    <h4 className="text-black font-bold pl-11 pt-16" style={{ fontFamily: "'Abel', sans-serif",fontSize:"2rem" }}>GET IN TOUCH</h4>
                    <form className="w-3/5 ml-11" ref={form}>
                        <input name="user_email" className="pl-6 rounded border border-black outline-none w-full h-12 text-black mt-8" type="email"  id="" placeholder="Your Email :" />
                        <textarea name="message" className="pl-6 pt-4 rounded border border-black outline-none w-full h-40 text-black mt-8"   id="" placeholder="Your Message :"></textarea>
                        <button className="w-32 h-10 rounded font-mono font-bold bg-black text-white text-center mt-4" type="submit" >SEND</button>
                    </form>
                </div>
                <div className="flex-1">
                    <img className="w-3/6 h-3/6 mx-auto mt-32" src="https://media.tenor.com/CeDk6XdCgOUAAAAi/develop-web.gif" alt="" />
                    <h5 className="font-mono text-center pt-4 font-bold">Copyright&copy; 2024 ES</h5>
                </div>
            </footer>
        </>
    );
};