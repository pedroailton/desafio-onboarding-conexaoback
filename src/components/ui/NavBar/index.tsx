
export function NavBar() {
    return (
        <nav className='flex flex-row items-center w-full px-[30px] bg-[#c44800c5] justify-between'>
            <div id='logo navbar' className="relative w-full h-64 md:h-96">
                C
            </div>
            <div className='flex flex-row items-center gap-[30px]'>
                <button className="p-2 font-sans text-[26px] font-normal rounded text-white hover:bg-[#43253448] hover:rounded-[8px]">
                    <a href="#">Início</a>
                </button>
                <button className="p-2 font-sans text-[26px] font-normal rounded text-white hover:bg-[#43253448] hover:rounded-[8px]">
                    <a href="#">Receitas</a>
                </ button>
                <button className="p-2 font-sans text-[26px] font-normal rounded text-white hover:bg-[#43253448] hover:rounded-[8px]">
                    <a href="#">Contato</a>
                </button>
            </div>
        </nav>
    )
}