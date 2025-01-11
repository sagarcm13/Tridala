import affordabilityIcon from './../../assets/icons/affordability.png';
import qualityIcon from './../../assets/icons/quality.png';
import rangeIcon from './../../assets/icons/range.png';
import supplyChainIcon from './../../assets/icons/supplyChain.png';
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
    <div className="py-20 px-8 font-lato" style={{
      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1440' height='1360' viewBox='0 0 1440 1360' fill='none'><rect x='-2' width='1441' height='1360' fill='%2379B3AF'/><path opacity='0.53' d='M-37.9998 544.845C228.677 529.659 239.943 346.869 212.241 257.372C72.8439 301.879 33.0435 376.107 26.8362 410.215C16.895 493.87 -16.6161 532.23 -37.9998 544.845Z' fill='%2324998A'/><path opacity='0.53' d='M1535.84 939.309C1223.18 922.778 1210.69 711.252 1243.53 607.555C1406.82 658.522 1453.2 744.282 1460.34 783.735C1471.67 880.522 1510.82 924.791 1535.84 939.309Z' fill='%231D7D71'/><path opacity='0.53' d='M618.676 267C590.992 403.349 693.519 430.095 748.243 426.425C741.896 350.939 705.059 322.299 686.488 315.236C640.218 300.58 622.944 279.246 618.676 267Z' fill='%23349778'/><path opacity='0.53' d='M957 406.845C1223.68 391.66 1234.94 208.869 1207.24 119.372C1067.84 163.879 1028.04 238.107 1021.84 272.215C1011.9 355.87 978.384 394.23 957 406.845Z' fill='%2328998B'/><path opacity='0.53' d='M723 1026.37C910.77 1013.77 919.769 880.914 900.797 816.059C802.432 849.208 773.987 903.366 769.418 928.18C761.932 989.012 738.123 1017.08 723 1026.37Z' fill='%232A7C74'/></svg>")`,
      backgroundColor: '#79B3AF',
    }}>
      <h2 className="text-2xl md:text-5xl xl:text-6xl font-bold text-center text-white  mb-12 md:mb-20">Our Mission and Values</h2>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className='md:hidden flex flex-col items-center justify-center space-y-4 my-4'>
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-4 md:p-8 flex flex-col items-center text-center md:space-y-4 w-64">
            <img src={value.icon} alt={value.title} className="h-8 w-8" />
            <h3 className="text-xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around md:m-5 xl:mx-44">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-8 xl:p-12 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-[350px] xl:h-[350px]">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-16 xl:w-16" />
            <h3 className="text-xl xl:text-3xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-sm xl:text-xl text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around md:m-5 xl:mx-44">
        {values2.map((value, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-8 xl:p-12 flex flex-col items-center text-center md:space-y-4 w-64 h-64 xl:w-[350px] xl:h-[350px]">
            <img src={value.icon} alt={value.title} className="h-8 w-8 xl:h-16 xl:w-16" />
            <h3 className="text-xl xl:text-3xl font-semibold text-[#218275]">{value.title}</h3>
            <p className="text-sm xl:text-xl text-[#2B8A6D]">{value.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MissionValues;