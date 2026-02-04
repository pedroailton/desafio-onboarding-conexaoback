export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface GetMealDTO {
    meals: Meal[];
}

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export interface CategoryResponseDTO {
    categories: Category[];
}

export async function getMealsByCategory(category: string): Promise<Meal[]> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data: GetMealDTO = await response.json();
    return data.meals || [];
}

export async function getAllMealsByCategories(categories: string[]): Promise<Meal[]> {
    const promises = categories.map(category => getMealsByCategory(category)); // Cria uma promessa para cada categoria
    const results = await Promise.all(promises); // Espera todas as promessas serem resolvidas
    return results.flat(); // Une todas as refeições (arrays de arrays do promise.all) em um único array
}

export async function getMealsByName(name: string): Promise<Meal[]> {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data: GetMealDTO = await response.json();
    return data.meals || []; // Retorna um array vazio se não houver refeições encontradas para evitar erros com o .map posteriormente
}