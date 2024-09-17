export default function About() {
    return (
        <>
            <div className="flex-none w-full h-2/4 bg-white flex flex-row justify-evenly">
                <div className="flex-1">
                    <h4
                        style={{
                            fontFamily: '"Noto Serif Display", serif',
                            fontSize: "3rem",
                        }}
                        className=" pt-16 pl-11"
                    >
                        ABOUT ME
                    </h4>
                </div>
                <div className="flex-1">
                    <p style={{ fontFamily: '"Abel", sans-serif' }} className="pr-11 pt-16">
                        I am a software developer with solid experience in various
                        technologies, including Java, JavaScript, React, Spring Boot, Node.js,
                        and MySQL. I have a strong ability to develop modern web solutions,
                        combining my expertise in both front-end and back-end to create robust
                        and efficient applications. <br /> In addition to software development, I
                        also possess skills in graphic design, using tools like Photoshop and
                        Illustrator to create visually appealing and functional interfaces. I
                        am constantly seeking new learning opportunities and challenges that
                        allow me to grow as a professional and contribute to the success of
                        innovative projects.
                    </p>
               </div>
            </div>
        </>
    );
}
