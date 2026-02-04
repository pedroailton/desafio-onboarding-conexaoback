import Image from "next/image";

export interface RecipeCardProps {
    receita: {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
    }
}

export function RecipeCard({ receita }: RecipeCardProps) {
    return (
        <div className='flex flex-col items-start w-full h-[350px] justify-between'>
            <Image src={receita.strMealThumb} alt={receita.strMeal} width={300} height={300} style={{ objectFit: "cover" }} />
            <h4 className="text-[24px] text-black">{receita.strMeal}</h4>
        </div>
    )
}