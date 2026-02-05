'use client'

import Image from "next/image"
import Link from "next/link"

export function NavBar() {
    return (
        <nav className='z-50 absolute flex flex-row items-center w-full py-[10px] bg-[var(--laranja)] opacity-80 justify-between'>
            <div className="flex flex-col mx-auto md:flex-row items-center md:justify-between px-6 md:px-12 lg:px-[150px] py-4 bg-[var(--laranja)]/80 gap-4 md:w-full">
                <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]">
                    <Image
                    src="/images/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    />
                </div>

                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-[30px] w-full md:w-auto justify-center'>
                    <Link className="bg-transparent p-2 font-sans text-[32px] font-normal rounded text-[var(--bege)] hover:bg-[var(--vinho)] hover:rounded-[8px] transition-colors opacity-100" href="/#banner">Início</Link>
                    <Link className="bg-transparent p-2 font-sans text-[32px] font-normal rounded text-[var(--bege)] hover:bg-[var(--vinho)] hover:rounded-[8px] transition-colors opacity-100" href="/#vitrine">Receitas</Link>
                    <Link className="bg-transparent p-2 font-sans text-[32px] font-normal rounded text-[var(--bege)] hover:bg-[var(--vinho)] hover:rounded-[8px] transition-colors opacity-100" href="/#footer">Contato</Link>
                </div>
            </div>
        </nav>
    )
}