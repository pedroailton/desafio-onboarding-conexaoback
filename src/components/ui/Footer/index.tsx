import Link from "next/link";
import { IconGithub, IconInstagram, IconLinkedin, IconMail } from "../SocialIcons";

export function Footer() {
    return (
        <footer id="footer" className='w-full px-8 h-auto py-10 bg-[#432534] text-[#EFD6AC]'>
            <div id="container" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

                <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-bold border-b-2 border-[#EFD6AC]/30 mt-10 pb-6 text-center">CookBuddy</h3>
                    <p className="max-w-xs">Desenvolvido para ajudar pessoas com dificuldade em cozinhar e querem aprender com praticidade.</p>
                </div>

                <nav className="flex flex-col gap-4 items-center md:items-start text-center md:text-center">
                    <h4 className="font-bold text-lg border-b-2 border-[#EFD6AC]/30 mt-10 pb-6 text-center">Navegação</h4>
                    <Link href={'/#banner'} className="hover:underline">Início</Link>
                    <Link href={'/#vitrine'} className="hover:underline">Receitas</Link>
                    <Link href={'/#footer'} className="hover:underline">Contato</Link>
                </nav>
                
                <div className="flex flex-col gap-4 items-center md:items-start text-center">
                    <h4 className="font-bold text-lg border-b-2 border-[#EFD6AC]/30 mt-10 pb-6 text-center">Redes Sociais</h4>
                    <Link href="https://github.com/pedroailton" target="_blank" className="flex flex-row items-center gap-2 hover:underline">
                        <IconGithub className="w-6 h-6" />
                        <span>GitHub</span>
                    </Link>

                    <Link href="https://linkedin.com/in/pedroailton" target="_blank" className="flex flex-row items-center gap-2 hover:underline" id="Linkedin">
                        <IconLinkedin className="w-6 h-6" />
                        <span>LinkedIn</span>
                    </Link>

                    <Link href="https://instagram.com/pedroailton.dev" target="_blank" className="flex flex-row items-center gap-2 hover:underline" id="Instagram">
                        <IconInstagram className="w-6 h-6" />
                        <span>Instagram</span>
                    </Link>

                    <Link href="mailto:pedroailton630@gmail.com" target="_blank" className="flex flex-row items-center gap-2 hover:underline" id="Email">
                        <IconMail className="w-6 h-6" />
                        <span>E-mail</span>
                    </Link>
                </div>
            </div>

            <div className="border-t-2 border-[#EFD6AC]/30 mt-10 pt-6 text-center text-sm">
                <p>Copyright © 2026 CookBuddy. All Rights Reserved</p>
            </div>
        </footer>
    )
}