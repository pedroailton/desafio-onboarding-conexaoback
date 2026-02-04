'use client';

import { useState, useEffect } from "react";

import { SearchBar } from "./SearchBar"
import { RecipeCard } from './RecipeCard'
import { FilterSelection } from './FilterSelection'

import { Meal, getAllMealsByCategories } from "@/app/api/api";

// Fingir que temos esses filtros disponíveis
const CATEGORIAS_DISPONIVEIS = ['Beef', 'Chicken', 'Dessert', 'Pasta'];

export function SecaoVitrine() {
    const [receitas, setReceitas] = useState<Meal[]>([]); // Estado para armazenar as receitas

    // Estado inicial: nada selecionado
    const [filtrosSelecionados, setFiltrosSelecionados] = useState<string[]>([]);

    useEffect(() => {
        // Função para buscar receitas da API
        async function fetchReceitas() {   
            try {
                const categoriasParaBuscar = filtrosSelecionados.length > 0 ? filtrosSelecionados : ['Beef'];

                const response = await getAllMealsByCategories(categoriasParaBuscar);
                setReceitas(response || []); // Atualiza o estado com as receitas recebidas
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
            }
        }
        fetchReceitas();
    }, [filtrosSelecionados]);

    function handleToggleFiltro(categoriaClicada: string) {
        if (filtrosSelecionados.includes(categoriaClicada)) {
            // Remover filtro
            setFiltrosSelecionados(filtrosSelecionados.filter(categoria => categoria !== categoriaClicada));
        } else {
            // Adicionar filtro
            setFiltrosSelecionados([...filtrosSelecionados, categoriaClicada]);
        }
    }

    return (
        <section>
            <div>
                <h2>Receitas</h2>
                <p>hajbdsjabhdoja ahsdjhasljd hlaj akshjdlkjahsj ajhdjksahjldhajl ajxcoanjcoid aod ianjdsljkandkljashn oaidjsoanljansdoi aoidjsoanj</p>
            </div>
            <div id='vitrine' className="flex flex-row items-center flex-start gap-[50px]">
                <aside id='filtrar' className="flex flex-col items-start gap-[10px]">
                    <p>Filtros</p>
                    {CATEGORIAS_DISPONIVEIS.map(categoria => (
                        <FilterSelection
                            key={categoria}
                            isChecked={filtrosSelecionados.includes(categoria)}
                            recipeName={categoria}
                            handleCheck={() => handleToggleFiltro(categoria)}
                        />
                    ))}
                </aside>
                <div id='pesquisa-e-cards'>
                    <SearchBar></SearchBar>
                    <div id="cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                        {receitas.map(receita => (
                            <RecipeCard key={receita.idMeal} receita={receita} />
                        ))}
                    </div>
                </div>
            </div>
            <div id='paginacao'>

            </div>
        </section>
    )
}
