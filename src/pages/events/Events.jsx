import img1 from './../../assets/Website/img1.JPG';
import img2 from './../../assets/Website/img2.JPG';
import img3 from './../../assets/Website/img3.JPG';
import img4 from './../../assets/Website/img4.JPG';
import img6 from './../../assets/Website/img6.JPG';
import img8 from './../../assets/Website/img8.JPG';
import img9 from './../../assets/Website/img9.JPG';
import img11 from './../../assets/Website/img11.JPG';
import img12 from './../../assets/Website/img12.JPG';
import img13 from './../../assets/Website/img13.jpg';
import img15 from './../../assets/Website/img15.JPG';
import img16 from './../../assets/Website/img16.JPG';
import TridalaEvent from './../../assets/Website/TridalaEvent.mp4'

export default function Events() {
    const images = [img4, img2, img6, img8, img9, img11, img12, img13, img15, img1, img16, img3];
    return (
        <>
            <div className="bg-[#189D90] text-center font-lato">
                <div className="text-white font-bold text-2xl md:text-3xl xl:text-4xl py-10">
                    Bringing our mission to life
                </div>
                {/* Grid container */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 px-4 py-6 md:p-10 xl:p-20">
                    {images.map((img, index) => (
                        <div key={index} className="w-full">
                            <img
                                className="w-full h-52 md:h-64 xl:h-72 object-cover rounded-xl"
                                src={img}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center bg-[#E1EFF5]'>
                <div className='text-[#ED6636] font-bold py-10 text-2xl md:text-3xl xl:text-4xl'>Videos</div>
                <div className='p-2 md:p-10 xl:p-20 py-10 flex flex-col justify-center'>
                    <video className='xl:h-[580px] w-auto' controls>
                        <source src={TridalaEvent} type="video/mp4" />
                    </video>
                    <div className='flex flex-col text-start md:space-y-5 py-5 md:py-10'>
                        <div className='md:text-xl xl:text-2xl'>20.11.2024</div>
                        <div className='font-medium md:text-xl xl:text-2xl'>In 1992, Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laudantium eius fuga dolorem minus aperiam maiores et quam optio molestias.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
