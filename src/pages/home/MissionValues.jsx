import affordabilityIcon from './../../assets/icons/affordability.png';
import qualityIcon from './../../assets/icons/quality.png';
import rangeIcon from './../../assets/icons/range.png';
import supplyChainIcon from './../../assets/icons/supplyChain.png';
import background from './../../assets/back.png';
const MissionValues = () => {
  const values = [
    {
      icon: affordabilityIcon,
      title: 'Affordability',
      description: "Quality doesn't have to cost an arm and a leg. We offer competitive prices without compromising on quality."
    },
    {
      icon: qualityIcon,
      title: 'Quality',
      description: "We don't cut corners. Ever. Our products undergo stringent testing to ensure safety and efficacy."
    },
  ];
  const values2 = [
    {
      icon: rangeIcon,
      title: 'Range',
      description: "Whatever you need, we've probably got it. From pain management to vitamins, we have solutions for all your healthcare needs."
    },
    {
      icon: supplyChainIcon,
      title: 'Supply Chain',
      description: "We've got your back, and your meds, when you need them. Our efficient sourcing and distribution processes ensure timely delivery."
    }]

  return (
    <div className="py-20 px-8 font-lato xl:min-h-screen md:space-y-20 xl:space-y-20 xl:h-screen" style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#79B3AF',
    }}>
      <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-center text-white mb-12 md:mb-20">Our Mission and Values</h2>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around md:m-3 xl:mx-96">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-6 xl:p-10 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-72 xl:h-72">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-14 xl:w-14" />
            <h3 className="text-xl xl:text-2xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-lg leading-none text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around md:m-5 xl:mx-96">
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-6 xl:p-10 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-72 xl:h-72">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-14 xl:w-14" />
            <h3 className="text-xl xl:text-2xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-lg leading-none text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MissionValues;