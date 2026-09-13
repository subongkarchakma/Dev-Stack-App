import type { Dispatch, SetStateAction } from 'react';
import type { ITech } from '../../types/techType';

export interface SelectedTechProps {
  selectedTech: ITech[];
  setSelectedTech: Dispatch<SetStateAction<ITech[]>>;
}

export default function SelectedTech({ selectedTech, setSelectedTech }: SelectedTechProps) {
    console.log(selectedTech, 'hello pro max');
  return;
}
