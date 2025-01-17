import logo from './../assets/logo.png';
import { Link } from 'react-router-dom';
import Forms from './Forms';

const Footer = () => {

  return (
    <footer className="font-lato bg-gradient-to-b from-[#46BEAC] to-[#0D6F66] text-white p-8">
      <div className='block md:hidden space-y-5'>
        <FormHelper />
        <Address />
        <div className='border-t-2 border-b-2 pb-4'>
          <SocialMedia />
        </div>
        <div className='flex justify-center items-center'>
          <CompanyResource />
        </div>
      </div>
      <div className="hidden  container mx-auto md:flex flex-col md:flex-row justify-between border-b-[1px] pb-4">
        <Address />
        <CompanyResource />
        <FormHelper />
      </div>
      <div className='hidden md:block'>
        <SocialMedia />
      </div>
    </footer>
  );
}
const CompanyResource = () => {
  return (
    <>
      <div className="flex space-x-16 md:space-x-8 xl:space-x-16 md:mt-16 mx-2">
        <div className="mb-8 md:mb-0">
          <h2 className="font-bold mb-4">Company</h2>
          <ul className='space-y-2'>
            <li><Link to="/Team" className="hover:underline font-semibold">About Us</Link></li>
            <li><Link to="/Team" className="hover:underline font-semibold">Team</Link></li>
            <li><Link to="/Purpose" className="hover:underline font-semibold">Journey</Link></li>
            <li><Link to="/Purpose" className="hover:underline font-semibold">Purpose</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">Resources</h2>
          <ul className='space-y-2'>
            <li><Link to="/Products" className="hover:underline font-semibold">Products</Link></li>
            <li><Link to="/Events" className="hover:underline font-semibold">Newsletter</Link></li>
            <li><Link to="/HealthTips" className="hover:underline font-semibold">Health Tips</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

const FormHelper = () => {
  return (
    <>
      <div className="flex flex-col md:w-1/3 ">
        <h2 className="font-semibold my-4 md:mb-4 md:mt-16">Contact Us</h2>
        <Forms />
      </div>
    </>
  )
}
const Address = () => {
  return (
    <>
      <div className="mb-8 md:mb-0 flex flex-col md:none md: items-center md:items-start">
        <img src={logo} alt="Tridala Logo" className="w-40 mb-4 bg-white m-2 px-10 py-2 rounded-full" />
        <div>
          <address className="not-italic mb-4">
            Tridala Pharmaceuticals Pvt. Ltd. <br />
            Sakura Complex, 3rd Floor No. 2M-317, NGEF Layout East <br />
            Kasturi Nagar Main Road, Bengaluru - 560 043, Karnataka.
          </address>
          <a href="mailto:order@tridalapharma.com" className="block mb-2">For order: order@tridalapharma.com</a>
          <a href="mailto:hr@tridalapharma.com" className="block mb-2">Job application: hr@tridalapharma.com</a>
          <a href="mailto:info@tridalapharma.com" className="block mb-2">Any quires: info@tridalapharma.com</a>
          <a href="tel:+91808813599">+91 80881 13599</a>
        </div>
      </div>
    </>
  );
}
const SocialMedia = () => {
  return (
    <>
      <div className="flex justify-center md:justify-end text-2xl md:text-3xl space-x-10 mt-5 md:mt-8 md:mx-28 xl:mx-40">
        <a href="https://twitter.com" className="text-white hover:text-gray-200"><i className="fab fa-x-twitter"></i></a>
        <a href="https://instagram.com" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" className="text-white hover:text-gray-200"><i className="fab fa-facebook"></i></a>
        <a href="https://linkedin.com" className="text-white hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
      </div>
    </>
  );
}

export default Footer;
