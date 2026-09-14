import { use, useState } from 'react';
import type { ITech } from '../../types/techType';
import TechCard from './TechCard';
import { MdCancel } from 'react-icons/md';
import { toast } from 'react-toastify';
// import { MdCancel } from 'react-icons/md';

export interface TechProps {
  techPromise: Promise<ITech[]>;
}

export default function Tech({ techPromise }: TechProps) {
  const technologies = use(techPromise);
  // console.log(tech);
  const [selectedTech, setSelectedTech] = useState<ITech[]>([]);
  const handleTechUpdate = (technology: ITech): void => {
    let newSelectedTech = [...selectedTech, technology];
    if(selectedTech.includes(technology)){
        newSelectedTech = selectedTech.filter(p => p.id != technology.id )
        toast.warn(`${technology.name} remove from your stack`)
    }else{
        setSelectedTech((p)=> [...p, technology] )
        toast.success(`${technology.name} Added to your stack`)
    }
    setSelectedTech(newSelectedTech);
  };
  const handleDeleteAll = (): void =>{
    setSelectedTech([]);
    toast("All Technologies removed")
  }

  return (
    <div className="container mx-auto  ">
      <h2 className="text-4xl font-bold">
        Explore the{' '}
        <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>{' '}
      </h2>
      <p className="text-[#64748B] ">
        Pick one technology per catagory to build your ideal stack
      </p>
      {/* Explore the Technology */}
      <div className="container mx-auto grid grid-cols-10 gap-6 justify-center my-8">
        {/* Technology Cards */}
        <div className="container mx-auto col-span-7 grid grid-cols-3 gap-6  ">
          {technologies.map((technology) => {
            return (
              <TechCard
                handleTechUpdate={handleTechUpdate}
                key={technology.id}
                technology={technology}              
              />
            );
          })}
        </div>
        {/* selectedStack Sidebar */}
        <div className="col-span-3 h-fit border border-gray-300 rounded-xl p-4 sticky top-13 self-start">
          <h2 className="text-2xl font-bold mb-2">Your Stack</h2>
          <p className="mb-4"> {selectedTech.length} Technology Selected </p>
          <div>
            {selectedTech.map((technology) => (
              <div className="flex items-center justify-between border border-gray-200 rounded-lg p-2">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 100 100" className="w-8 h-8">
                    <image href={technology.icon} width="100" height="100" />
                  </svg>
                  <div className="flex flex-col">
                    <h2> {technology.name}</h2>
                    <h2>{technology.category}</h2>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleTechUpdate(technology)}
                    className="text-2xl"
                  >
                    <MdCancel />
                  </button>
                </div>
              </div>
            ))}
          </div>

            {selectedTech.length > 0 && (
                <button className='mt-12 w-full rounded-lg py-2 font-bold text-red-600 border border-red-400' onClick={handleDeleteAll}>
                    Remove All</button>
            ) }

        </div>
      </div>
    </div>
  );
}
