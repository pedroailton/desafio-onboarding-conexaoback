'use client';

import { useState, useEffect } from "react";

import { SearchBar } from "./SearchBar"
import { RecipeCard } from './RecipeCard'
import { FilterSelection } from './FilterSelection'

import { Meal, getAllMealsByCategories, getMealsByName } from "@/app/api/api";

// Fingir que temos esses filtros disponíveis
const CATEGORIAS_DISPONIVEIS = ['Beef', 'Chicken', 'Dessert', 'Pasta'];

export function SecaoVitrine() {
    const [receitas, setReceitas] = useState<Meal[]>([]); // Estado para armazenar as receitas

    // Estado inicial: nada selecionado
    const [filtrosSelecionados, setFiltrosSelecionados] = useState<string[]>([]);

    const [textoBusca, setTextoBusca] = useState<string>('');

    useEffect(() => {
        async function fetchReceitas() {   
            try {
                // CENÁRIO A: Tem texto na busca? Então buscamos por NOME.
                if (textoBusca.trim() !== '') {
                    const response = await getMealsByName(textoBusca);
                    setReceitas(response || []);
                } 
                // CENÁRIO B: Não tem busca? Então buscamos por CATEGORIA.
                else {
                    // Se não tiver filtro, garante o 'Beef' como padrão
                    const categoriasParaBuscar = filtrosSelecionados.length > 0 
                        ? filtrosSelecionados 
                        : ['Beef'];
                    
                    const response = await getAllMealsByCategories(categoriasParaBuscar);
                    setReceitas(response || []);
                }
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setReceitas([]); // Em caso de erro, limpa a lista
            }
        }
        fetchReceitas();
    }, [filtrosSelecionados, textoBusca]); // Roda sempre que um dos dois mudar

    function handleToggleFiltro(categoriaClicada: string) {
        if (filtrosSelecionados.includes(categoriaClicada)) {
            // Remover filtro
            setFiltrosSelecionados(filtrosSelecionados.filter(categoria => categoria !== categoriaClicada));
        } else {
            // Adicionar filtro
            setFiltrosSelecionados([...filtrosSelecionados, categoriaClicada]);
        }
        setTextoBusca(''); // Limpa o texto de busca ao alterar filtros: Lógica exclusiva de filtro
    }

    function handleBusca(texto: string) {
        setFiltrosSelecionados([]); // Limpa os filtros ao buscar: Lógica exclusiva de busca
        setTextoBusca(texto);
    }

    return (
        <section>
            <div>
                <h2>Receitas</h2>
                <p>hajbdsjabhdoja ahsdjhasljd hlaj akshjdlkjahsj ajhdjksahjldhajl ajxcoanjcoid aod ianjdsljkandkljashn oaidjsoanljansdoi aoidjsoanj</p>
            </div>
            <div id='vitrine' className="flex flex-row items-center flex-start gap-[50px]">
                <div id='filtrar' className="flex flex-col items-start gap-[10px]">
                    <p>Filtros</p>
                    {CATEGORIAS_DISPONIVEIS.map(categoria => (
                        <FilterSelection
                            key={categoria}
                            isChecked={filtrosSelecionados.includes(categoria)}
                            recipeName={categoria}
                            handleCheck={() => handleToggleFiltro(categoria)}
                        />
                    ))}
                </div>
                <div id='pesquisa-e-cards'>
                    <SearchBar textoBusca={textoBusca} aoDigitar={handleBusca} aoBuscar={() => {}} />
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
