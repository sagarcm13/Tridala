import whatsapp from './../../assets/whatsApp.png'
import homePoster from './../../assets/homePoster.png';
import homePageVideo from './../../assets/homePageVideo.mp4';
import MissionValues from './MissionValues.jsx';
import OurProducts from './OurProducts.jsx';
import { useNavigate } from "react-router-dom";
import tablets from "./../../assets/tablets.png"

const Home = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="font-lato w-full xl:min-h-screen bg-slate-200 flex flex-col justify-center text-center relative">
                <video
                    className="absolute top-0 left-0 w-full h-auto  z-0"
                    autoPlay
                    loop
                    muted
                >
                    <source src={homePageVideo} type="video/mp4" />
                </video>
                <div className="relative">
                    <img
                        src={whatsapp}
                        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 xl:bottom-16 xl:right-16 w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 cursor-pointer rounded-lg z-50"
                        alt="WhatsApp"
                    />
                </div>
            </div>
            <div className='bg-slate-200 flex flex-col justify-center text-center pt-60 md:pt-[500px] xl:pt-40'>
                <div className='p-5 md:p-20'>
                    <img src={homePoster} className='w-max' alt="" />
                </div>
                <div className='text-3xl md:text-4xl xl:text-5xl text-[#218275] font-bold space-y-5 md:space-y-10 my-10 md:my-20'>
                    <div className='font-lato'>
                        <span>Our</span> <span className='text-orange-600'>Products</span>
                    </div>
                    <OurProducts />
                </div>
                <MissionValues /> 
                <div className='flex justify-around'>
                    <div className='flex flex-col p-5 md:w-[50%] justify-start text-start md:m-5 xl:m-10'>
                        <div className='text-[#25988B] text-5xl md:text-6xl xl:text-8xl font-extrabold'>OUR</div>
                        <div className='text-[#25988B] text-5xl md:text-6xl xl:text-8xl font-extrabold'>JOURNEY</div>
                        <div className='text-[#25988B]  mt-8 xl:text-2xl '>
                            Tridala Pharmaceuticals has been dedicated to improving global health through innovative pharmaceutical solutions. From breakthrough treatments to a commitment to sustainability
                        </div>
                        <img src={tablets} className='md:hidden h-84' alt="Medicine image" />
                        <div>
                            <button onClick={() => { navigate('purpose'); }} className='bg-[#25988B] px-8 xl:px-12 py-3 xl:py-5 rounded-full text-white mt-10 xl:mt-16'>More</button>
                        </div>
                    </div>
                    <div className='md:p-5 md:w-[50%] flex items-center flex-col m-5 xl:m-10'>
                        <div className='flex justify-end mt-5'>
                            <div className='md:text-2xl xl:text-4xl font-bold'>Since <span className='text-green-600'>2024</span></div>
                        </div>
                        <img src={tablets} className='h-84 xl:h-[450px] hidden md:block' alt="Medicine image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;