import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/globals.css'; 
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'CookBuddy',
    description: 'É um site que busa trazer praticidade e conforto na cozinha para iniciantes, a partir de um companheiro por chat de voz que o ajude nessa jornada de aprendizado que é descobrir no que é possível transformar a própria cozinha e como é possível mudar o dia com uma comida gostosa.',
    applicationName: 'CookBuddy',
    authors: [{ url: 'github.com/pedroailton', name: 'Seed a Bit' }],
    keywords: ['IA', 'receitas'],
    creator: 'Pedro Ailton',
    publisher: 'Pedro Ailton',
    abstract: 'É um site que busa trazer praticidade e conforto na cozinha para iniciantes, a partir de um companheiro por chat de voz que o ajude nessa jornada de aprendizado que é descobrir no que é possível transformar a própria cozinha e como é possível mudar o dia com uma comida gostosa.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR' className='scroll-smooth'>
            <head>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavBar></NavBar>
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer></Footer>
            </body>
        </html>
    )
}
