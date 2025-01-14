import leaves from './../../assets/healthTips/leaves.svg';
import apple from './../../assets/healthTips/apple.png';
import exercise from './../../assets/healthTips/exercise.png';
import { fruitsData } from './../../constants/fruitsData';
import { exerciseData } from './../../constants/exerciseData';
import { useState, useEffect } from 'react';
export default function HealthTips() {
  const [index, setIndex] = useState(new Date().getDate());
  const [isFruit, setIsFruit] = useState(true);
  const [boxContent, setBoxContent] = useState("");
  useEffect(() => {
    if (isFruit) {
      let content = (<div className="bg-[#36A899C4] text-white rounded-2xl shadow md:p-4 xl:p-8 flex flex-col md:flex-row items-center md:items-start xl:mx-40">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 mx-10">Fruit of the day: {fruitsData[index].name}</h3>
          <ul className="list-disc list-inside text-lg md:text-xl xl:text-2xl xl:py-5 xl:px-8">
            <li>Nutritional Values ({fruitsData[index].nutritionalValues.weight}):</li>
            <li>Calories: {fruitsData[index].nutritionalValues.calories}</li>
            {fruitsData[index].nutritionalValues.extras.map((item, ind) => (<><li key={ind}>{item}</li></>))}
            <li className="flex items-start">
              <span className="mr-2 font-bold">Key Benefits:</span>
              <ul className=" ml-4">
                {fruitsData[index].keyBenefits.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </li>

          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={fruitsData[index].img}
            alt="img"
            className="rounded-lg shadow-md md:w-80 md:h-80 xl:w-[530px] xl:h-[400px]"
          />
        </div>
      </div>);
      setBoxContent(content);
    } else {
      let content = (<div className="bg-[#36A899C4] text-white rounded-2xl shadow md:p-4 xl:p-8 flex flex-col md:flex-row items-center md:items-start xl:mx-40">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 mx-10">Exercise of the day: {exerciseData[index].name}</h3>
          <ul className="list-disc text-lg md:text-xl xl:text-2xl xl:py-5 xl:px-8">
            {exerciseData[index].todo.map((item, ind) => (<><li key={ind}>{item}</li></>))}
          </ul>
          <div className="mx-6 font-bold  text-lg md:text-xl xl:text-2xl">Benefits</div>
          <ul className="list-decimal text-lg md:text-xl xl:text-2xl xl:py-5 xl:px-8">
            {fruitsData[index].keyBenefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={exerciseData[index].img}
            alt="img"
            className="rounded-lg shadow-md md:w-80 md:h-80 xl:w-[552px] xl:h-[420px]"
          />
        </div>
      </div>);
      setBoxContent(content);
    }
  }, [index, isFruit]);

  return (
    <div className="font-lato bg-[#E1EFF5] p-8 xl:p-16">
      <div className="grid md:grid-cols-3 gap-6 mb-10 xl:mx-40">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-center mb-4">
            30 Days Challenge
          </h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600">
            {[...Array(31)].map((_, i) => (
              <>
                <button onClick={() => setIndex(i)}>
                  <div
                    key={i}
                    className={`p-2 w-10 h-10 flex items-center justify-center ${i + 1 === new Date().getDate()
                      ? "bg-[#22c2b2] text-white rounded-full"
                      : "hover:bg-gray-200 rounded"
                      }`}
                  >
                    {i + 1}
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col items-center m-2 md:m-4 xl:m-8">
          <div className='absolute top-0 right-0 rotate-180'>
            <img src={leaves} alt="" />
          </div>
          <button onClick={() => { setIsFruit(true) }}>
            <div className="bg-[#23C5B5] p-4 h-40 w-40 md:h-52 md:w-52 xl:h-60 xl:w-60 rounded-full">
              <img src={apple} className='p-2' alt="" />
            </div>
            <h3 className="mt-4 text-lg font-bold">NUTRITION</h3>
          </button>
          <div className='absolute left-0 bottom-0'>
            <img src={leaves} alt="" />
          </div>
        </div>
        <div className="relative bg-white rounded-2xl shadow p-6 flex flex-col items-center m-2 md:m-4 xl:m-8">
          <div className='absolute top-0 left-0 rotate-90'>
            <img src={leaves} alt="" />
          </div>
          <button onClick={() => { setIsFruit(false) }}>
            <div className="h-40 w-40 md:h-52 md:w-52 xl:h-60 xl:w-60 rounded-full">
              <img src={exercise} className='xl:h-60 xl:w-60' alt="" />
            </div>
          </button>
          <h3 className="mt-4 text-lg font-bold">Exercise</h3>
          <div className='absolute right-0 bottom-0 -rotate-90'>
            <img src={leaves} alt="" />
          </div>
        </div>
      </div>
      {boxContent}
    </div >
  );
}
