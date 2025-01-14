import purposePoster from './../../assets/purposePoster.svg'
import OurStory from './OurStory.jsx';
import Ladder from './Ladder.jsx';
import left from './../../assets/icons/missionleft.svg';
import right from './../../assets/icons/missionright.svg';
export default function Purpose() {
  return (
    <>
      <div className='font-lato'>
        <img src={purposePoster} className='w-full' alt="" />
      </div>
      <OurStory />
      <Ladder />
      <div className='font-lato flex flex-col text-center pt-5 bg-slate-200 items-center '>
        <div className='flex justify-center items-center py-10 xl:py-16 space-x-3'>
          <img src={left} className='h-10 md:h-12 xl:h-16' alt="" />
          <div className='text-2xl md:text-3xl xl:text-5xl font-bold text-[#329284] my-4'>MISSION & VALUES</div>
          <img src={right} className='h-10 md:h-12 xl:h-16' alt="" />
        </div>
        <div className="text-sm md:text-xl xl:text-2xl text-justify my-5 xl:my-10 mx-10 md:mx-20 xl:mx-60 text-[#329284] xl:w-[1100px] leading-tight md:leading-tight xl:leading-tight">Tridala Pharmaceuticals is dedicated to transforming healthcare globally through innovative research and reliable distribution of affordable medications. Our state-of-the-art facilities and experienced team enable us to produce a wide range of pharmaceuticals, from everyday essentials to advanced treatments, all designed to meet the highest standards of quality. We maintain strong supply chain partnerships to ensure the consistent availability of our products, empowering healthcare providers to deliver effective care without compromising on affordability.</div>
        <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center">
          <div className="flex flex-col border-2 p-2 my-4 mx-3 py-4 md:mx-8 md:px-4 xl:px-8 rounded-xl w-80 md:h-[260px] xl:w-[500px] xl:h-[380px] space-y-5 bg-white shadow-xl">
            <div className="text-[#3EB2A2] text-xl md:text-2xl xl:text-4xl font-bold">Our Vision</div>
            <div className="text-[#3EB2A2] text-justify text-sm md:text-l xl:text-2xl leading-5 md:leading-7 xl:leading-10">Our vision is to be the world&apos;s trusted provider of innovative, high-quality, and affordable healthcare solutions, empowering hospitals and clinics to enhance patient outcomes across the nation.</div>
          </div>
          <div className="flex flex-col border-2 p-2 my-4 mx-3 py-4 md:mx-8 md:px-4 xl:px-8 rounded-xl w-80 md:h-[260px]  xl:w-[500px] xl:h-[380px] space-y-5 bg-white shadow-xl">
            <div className="text-[#3EB2A2] text-xl md:text-2xl xl:text-4xl font-bold">Our Commitment</div>
            <div className="text-[#3EB2A2] text-justify text-sm md:text-l xl:text-2xl leading-5 md:leading-7 xl:leading-10">We are committed to providing affordable healthcare solutions that empower healthcare providers and improve patient lives. Every product undergoes rigorous quality assurance, guaranteeing safety and efficacy while remaining cost-effective.</div>
          </div>
        </div>
      </div>
    </>
  )
}
