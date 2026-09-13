import { use, useState } from 'react';
import type { ITech } from '../../types/techType';
import TechCard from './TechCard';

export interface TechProps {
  techPromise: Promise<ITech[]>;
}

export default function Tech({ techPromise }: TechProps) {
  const technologies = use(techPromise);
  // console.log(tech);
  const [selectedTech, setSelectedTech] = useState<ITech[]>([]);
  return (
    <div className="container mx-auto  ">
      <h2 className="text-4xl font-bold">
        Explore the{' '}
        <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Technologies
        </span>{' '}
      </h2>
      <p className='text-[#64748B] '>Pick one technology per catagory to build your ideal stack</p>

      <div className="container mx-auto grid grid-cols-3 gap-6 mt-8 ">
        {technologies.map((technology) => {
          return <TechCard key={technology.id} technology={technology} selectedTech ={selectedTech} setSelectedTech = {setSelectedTech} />;
        })}
      </div>
    </div>
  );
}
