import { SecaoBanner } from "@/components/ui/SecaoBanner";
import { SecaoVitrine } from "@/components/ui/SecaoVitrine";
import { BackgroundImage } from "@/components/ui/BackgroundImage";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
                <div className="relative w-full">
                    <BackgroundImage />

                    <div className="mt-[140px]">
                        <SecaoBanner />
                    </div>
                </div>

                <div className="relative z-10 bg-[var(--branco)]">
                    <SecaoVitrine />
                </div>
        </main>
    )
}
