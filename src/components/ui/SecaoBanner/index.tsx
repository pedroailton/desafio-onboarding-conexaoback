export function SecaoBanner() {
    return (
        <div className='flex flex-col items-center w-max h-[735px] gap-[70px]'>
            <main className="flex flex-col items-center">
                <h1 className="text-[40px] font-bold text-white uppercase">Bem Vindo ao CookBuddy</h1>
                <h2 className="text-[40px] font-semibold text-white">Seu parceiro de cozinha por voz</h2>
            </main>
            <button className="text-[var(--preto)] bg-[var(--bege)] rounded-[16px] text-[32px] font-normal">Cozinhe comigo</button>
        </div>
    )
}