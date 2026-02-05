import Image from "next/image";

export function BackgroundImage() {
    return (
        // 'h-full' vai pegar a altura do PAI (o Banner), não da tela
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
            <Image
            src="/images/fundo.png"
            alt="Fundo Background"
            fill
            quality={100}
            priority
            className="object-cover"
            />
            <div className="absolute bottom-0 w-full h-20"></div>
        </div>
        
    )
}