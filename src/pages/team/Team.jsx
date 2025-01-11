/* eslint-disable react/jsx-key */
import teamPoster from './../../assets/teamPoster.png';
import founder from './../../assets/people/founder.png';
import hrf from './../../assets/people/hrf.png';
import ceo from './../../assets/people/ceo.png';
import vp from './../../assets/people/vp.png';
import marketing from './../../assets/people/marketing.png';
import chairperson from './../../assets/people/chairperson.png';
import diabetesSpecialist from "./../../assets/people/diabetesSpecialist.png"
import surgeon from "./../../assets/people/surgeon.png"
import Pediatrician from "./../../assets/people/Pediatrician.png"
import surgicalOncologist from "./../../assets/people/surgicalOncologist.png"
import PersonCard from './PersonCard';
export default function Team() {
  const personsRow1 = [
    {
      img: chairperson,
      description: "Usha ensures we stay true to our mission, overseeing strategy and governance with a focus on ethics, excellence, and delivering affordable, quality medication",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: hrf,
      description: "Monika oversees HR and Finance, driving key operations that contribute significantly to Tridala's growth ans success",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: marketing,
      description: "Kushala leads our marketing efforts, balancing strategy and compliance to create impactful, results-driven campaigns.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ];
  const personsRow2 = [
    {
      img: ceo,
      description: "Graduated from Bangalore Medical College and then completed M.D in pediatrics at one of the top most institute of post graduate education and training centre in India. Worked at St. Martha's Hospital, Bangalore consultant pediatrician for 5 years.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: vp,
      description: "With 15+ years in pharma sales and marketing, including roles at Empire Venson and Hetero Healthcare, Shantha drives our business growth",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
  ]
  const advisoryTeam = [
    {
      img: Pediatrician,
      name: "DR. Narasimppa  GM",
      role: "Pediatrician",
      description: "Dr. Narasimhappa advises Tridala to ensure its medicines meet the critical needs of pediatric care, focusing on effective, safe, and accessible solutions for children.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: diabetesSpecialist,
      name: "Dr. Ambrish C",
      role: "DIABETES CARE SPECIALIST",
      description: "Dr. Ambrish C believes Tridala's mission aligns with today's urgent need for affordable diabetes care, making quality treatment accessible to all patients.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: surgicalOncologist,
      name: "DR. Girish G",
      role: "Surgical oncologist",
      description: "Dr. Girish, MBBS, MS, MCh, is an experienced surgical oncologist specializing in laparoscopic and robotic surgeries, offering over 14 years of expert, compassionate care to cancer patients.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    },
    {
      img: surgeon,
      name: "DR. ARUO NAYAK",
      role: "GENERAL SURGEON",
      description: "Dr. Arun Nayak joined the advisory board to guide Tridala in delivering surgical-grade medicines, driven by his passion for accessible high-quality healthcare.",
      x: "https://twitter.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    }
  ];
  return (
    <>
      <div className="bg-slate-200 font-lato">
        <div>
          <img src={teamPoster} className='w-full' alt="founder image" />
        </div>
        <div className="flex flex-col text-center space-y-3 md:space-y-10 xl:space-y-15 m-5 md:m-10 xl:m-15">
          <div className='text-[#218275] text-2xl md:text-4xl xl:text-7xl font-bold'>MEET OUR TEAM</div>
          <div className="text-xl font-bold md:text-3xl xl:text-6xl">Our Founder</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around space-y-10 md:space-y-0 md:space-x-10 xl:space-x-20 p-5 md:p-10 xl:mx-28">
          <img
            className="h-60 w-auto md:h-96 md:w-auto xl:h-[480px] xl:w-auto object-contain"
            src={founder}
            alt="Profile"
          />
          <div className="text-[#218275] text-center md:text-left text-sm font-medium md:text-xl xl:text-3xl space-y-4">
            <div className="text-justify">
              Kemparju. K was born into a farming family. He completed his education at a government school and developed a long-term vision to contribute to society through a multidisciplinary approach. He began his career as a small entrepreneur across various fields, achieving success through his dedication, discipline, and devotion.
            </div>
            <div className="text-justify">
              His commitment to social service led him to enter the political arena. He realised that the community needed accessibility to affordable healthcare. And decided to establish a framework of Trusted, Revolutionary, Innovative, and Defined Affordability in collaboration with a league of esteemed pharmaceutical and medical practitioners. That was when Tridala Pharmaceutical was born.
            </div>
          </div>
        </div>

        <div className='flex justify-center p-5 md:p-10'>
          <div className='text-3xl xl:text-5xl font-bold'>Board of Directors</div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0 p-2 md:py-10">
          {personsRow1.map((person) => {
            return (<PersonCard person={person} />);
          })}
        </div>
        <div className="flex flex-col md:flex-row md:justify-around items-center space-y-2 md:space-y-0 p-2 md:py-10">
          {personsRow2.map((person) => {
            return (<PersonCard person={person} />);
          })}
        </div>
        <div className='flex flex-col text-center items-center justify-center py-5'>
          <div className='text-3xl xl:text-5xl font-bold mb-5 xl:mb-10'>Advisory Team</div>
          <div className='flex flex-col md:flex-row flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 xl:space-x-16'>
            {advisoryTeam.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col bg-[#3DAAA5E3] rounded-2xl w-52 md:w-52 xl:w-80 md:h-[550px] xl:h-[700px] mx-2 ${index === 0 ? 'mt-0' : 'mt-2'
                  }`}
              >
                <img src={item.img} className='h-52 md:h-64 xl:h-96' alt="" />
                <div className='text-white font-bold mt-2 md:text-xl xl:text-2xl'>{item.name}</div>
                <div className='mt-2 md:text-l xl:text-xl'>{item.role}</div>
                <div className='md:h-52 xl:h-60'>
                  <div className='text-justify text-sm md:text-l xl:text-xl text-white p-2'>{item.description}</div>
                </div>
                <div className="flex justify-center space-x-6 xl:space-x-8 pb-2  md:text-xl xl:text-2xl">
                  <a href={item.x} className="text-white hover:text-gray-200"><i className="fab fa-x-twitter"></i></a>
                  <a href={item.instagram} className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
                  <a href={item.facebook} className="text-white hover:text-gray-200"><i className="fab fa-facebook"></i></a>
                  <a href={item.linkedin} className="text-white hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
