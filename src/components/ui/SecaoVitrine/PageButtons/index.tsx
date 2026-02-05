import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export interface PageButtonsProps {
    paginaAtual: number;
    setPaginaAtual: (pagina: number) => void;
    totalItens: number;
    itensPorPagina: number;
}

export function PageButtons({ paginaAtual, setPaginaAtual, totalItens, itensPorPagina }: PageButtonsProps) {
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);

    return (
        <div className="flex flex-row justify-center items-center gap-4 mt-10 mb-6">
            <button
                className="p-2 border rounded-lg hover:bg-gray-100  disabled:opacity-50"
                disabled={paginaAtual === 1}
                onClick={() => setPaginaAtual(paginaAtual - 1)}
            >
                <ChevronLeftIcon />
            </button>

            <span className="text-[24px]">{`Página ${paginaAtual} de ${totalPaginas}`}</span>
            
            <button
                className="p-2 border rounded-lg hover:bg-gray-100  disabled:opacity-50"
                disabled={paginaAtual === totalPaginas}
                onClick={() => setPaginaAtual(paginaAtual + 1)}
            >
                <ChevronRightIcon />
            </button>
        </div>
        )
}