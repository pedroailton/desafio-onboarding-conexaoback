'use client'

import { MoveLeftIcon } from "lucide-react"

export default function NotFound() {
    return (
        <div className='w-full h-screen items-center justify-center flex flex-col gap-8 text-[var(--laranja)]'>
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-5xl">Página Não Encontrada</h2>
            <button onClick={() => window.location.href = '/'} className="flex flex-row items-center gap-4 px-4 py-2 bg-[var(--laranja)] text-[var(--bege)] rounded hover:bg-[var(--vinho)] transition-colors"> 
                <MoveLeftIcon />
                <p>Voltar à Página Inicial</p>
            </button>
        </div>
    )
}
