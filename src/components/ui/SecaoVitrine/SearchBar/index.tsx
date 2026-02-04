import {SearchIcon } from "lucide-react";

export function SearchBar() {
    return (
        <div className='flex flex-row items-center w-[700px] h-[60px] justify-between bg-[var(--bege)] p-2 border border-black rounded-md'>
            <div className="bg-white w-max h-[60px] flex flex-row items-start p-2 border border-black rounded-md">
                <p className="text-[#2A2A2A] font-normal text-[32px]">Pesquisar</p>
            </div>
            <button>
                <SearchIcon className="w-[40px] h-[40px] hover:opacity-75"></SearchIcon>
            </button>
        </div>
    )
}