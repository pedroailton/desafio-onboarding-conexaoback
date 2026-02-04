import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '/src/app/globals.css'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { SecaoBanner } from '@/components/ui/SecaoBanner'
import { SecaoVitrine } from '@/components/ui/SecaoVitrine'

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
        <html lang='pt-BR'>
            <head>
                <link rel="preload" href="/images/seed-a-mascot.svg" as="image" />
                <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
                <link rel="shortcut icon" href="/icons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/icons/site.webmanifest" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavBar></NavBar>
                <SecaoBanner></SecaoBanner>
                <SecaoVitrine></SecaoVitrine>
                <Footer></Footer>
                {children}
            </body>
        </html>
    )
}
