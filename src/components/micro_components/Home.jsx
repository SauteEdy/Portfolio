
import '../../../src/general.css';
export default function Home(){
    const downloadCv = () =>{
        window.open("https://drive.google.com/uc?export=download&id=1ufd79rwQyA2TOumrvLoExy0-hmVDlhxD", "_blank");
    }
    return(
        <>
            <div >
                <h1 style={{fontFamily:'"EB Garamond", serif', fontSize:"3rem"}} className='text-white pt-32'>EDMILSON SAÚTE</h1>
                <p className='pt-5 font-mono tracking-normal  text-white'>Software Developer & Graphic Designer</p>
                <button onClick={downloadCv} style={{fontSize:"1rem"}} className='w-32 h-10 rounded border border-white mt-16 mx-auto text-white'>
                    DOWNLOAD CV
                </button>
            </div>
        </>
    );
};