import { useState, type Dispatch, type SetStateAction } from 'react';
import type { ITech } from '../../types/techType';
import { CiStar } from 'react-icons/ci';
import SelectedTech from './SelectedTech';

export interface TechCardProps {
  technology: ITech;
  handleTechUpdate:(technology: ITech) => void;
  selectedTech: ITech[];
  setSelectedTech: Dispatch<SetStateAction<ITech[]>>;
}

export default function TechCard({
  technology,
  handleTechUpdate,
  selectedTech,
  setSelectedTech,
}: TechCardProps) {
  const [isAdded, setIsAdded] = useState(false);
  const handleIsAdded = ()=>{
    setIsAdded(!isAdded)
    handleTechUpdate(technology)
  }
  
  return (
    // {/* Technology Cards */}
      <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-base-200 p-3">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain"
            />
          </div>

          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {technology.badge}
          </span>
        </div>

        {/* Technology Info */}
        <div className="mt-5">
          <h2 className="text-xl font-bold">{technology.name}</h2>

          <p className="mt-2 text-medium text-base-content">
            {technology.description}
          </p>
        </div>

        {/* Details */}
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3">
          <span className="rounded-lg bg-base-200 px-3 py-1 text-sm font-medium">
            {technology.category}
          </span>

          <span className="text-sm text-base-content/60">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold">
            <CiStar className="text-yellow-500" />
            {technology.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleIsAdded}
          className={`btn btn-neutral mt-6 w-full rounded-xl font-normal transition-transform duration-300 hover:scale-[1.02]`}
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add to Stack'}
        </button>
        <SelectedTech
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      </div>
  );
}
