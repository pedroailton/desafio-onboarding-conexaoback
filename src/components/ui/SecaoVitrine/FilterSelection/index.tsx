import { CheckIcon } from "lucide-react";

interface FilterProps {
    isChecked: boolean;
    recipeName: string;
    handleCheck: () => void;
}

export function FilterSelection({ isChecked, recipeName, handleCheck }: FilterProps) {
    return (
        <div className='flex flex-row items-center w-[300px] gap-[20px]'>
            <button className="flex flex-row items-center border border-black rounded w-[40px] h-[40px]" onClick={handleCheck}>
                {isChecked && <CheckIcon></CheckIcon>}
            </button>
            <p className="text-[24px]">{recipeName}</p>
        </div>
    )
}