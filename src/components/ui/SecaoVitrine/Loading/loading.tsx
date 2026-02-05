import { Loader2 } from "lucide-react";

export function Loading() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Loader2 className="animate-spin mx-auto" size={48} />
            <p className="text-center mt-4 text-gray-500">Carregando receitas...</p>
        </div>
    )
}