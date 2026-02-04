import { SearchIcon } from "lucide-react";

interface SearchBarProps {
    textoBusca: string; // Texto atual da busca
    aoDigitar: (texto: string) => void; // Função que recebe uma string e não retorna nada
    aoBuscar: () => void; // Função não recebe nenhum parâmetro e não retorna nada
}

export function SearchBar({ textoBusca, aoDigitar, aoBuscar }: SearchBarProps) {
    return (
        <div className='flex flex-row items-center w-full max-w-[700px] h-[60px] justify-between bg-[var(--bege)] p-2 border border-black rounded-md'>
                <input 
                    className="text-[#2A2A2A] font-normal text-[32px] bg-white w-full max-w-[690px] h-[50px] flex flex-row items-center p-2 border border-black rounded-md outline-none" 
                    placeholder="Pesquisar" // Mensagem de placeholder
                    value={textoBusca}
                    onChange={(e) => aoDigitar(e.target.value)} // Chama aoDigitar com o valor atual do input
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            aoBuscar();
                        }
                    }
                    }
                />
            <button onClick={aoBuscar}>
                <SearchIcon className="w-[35px] h-[35px] hover:opacity-75"></SearchIcon>
            </button>
        </div>
    )
}