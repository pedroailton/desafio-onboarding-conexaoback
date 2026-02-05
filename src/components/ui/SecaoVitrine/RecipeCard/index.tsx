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
        <div className='flex flex-col w-[300px] items-start h-max justify-between'>
            <Image className="rounded-[8px] border-black border-2 shadow-lg" src={receita.strMealThumb} alt={receita.strMeal} width={300} height={300} style={{ objectFit: "cover" }} />
            <h4 className="text-[24px] break-words w-full text-black">{receita.strMeal}</h4>
        </div>
    )
}