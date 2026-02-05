import Link from "next/link";

export function SecaoBanner() {
    return (
        <section id="banner" className='flex flex-col items-center w-full h-screen justify-center gap-[60px]'>
            <div className="flex flex-col items-center gap-[10px]">
                <h1 className="text-[var(--bege)] text-center font-bold text-white uppercase">Bem Vindo ao CookBuddy</h1>
                <h2 className="text-[var(--bege)] text-center font-semibold text-white">Seu parceiro de cozinha por voz</h2>
            </div>
            <button className="w-max h-max text-[var(--preto)] bg-[var(--bege)] py-3 px-6 rounded-[8px] text-[40px] font-normal hover:bg-[var(--vinho)] hover:text-[var(--bege)] transition-colors" >
                <Link href="/#vitrine">Cozinhe comigo!</Link>
            </button>
        </section>
    )
}