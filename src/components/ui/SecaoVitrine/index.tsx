'use client';

import { useState, useEffect } from "react";

import { SearchBar } from "./SearchBar"
import { RecipeCard } from './RecipeCard'
import { FilterSelection } from './FilterSelection'
import { PageButtons } from "./PageButtons";

import { Meal, getAllMealsByCategories, getMealsByName } from "@/app/api/api";

// Fingir que temos esses filtros disponíveis
const CATEGORIAS_DISPONIVEIS = ['Beef', 'Chicken', 'Dessert', 'Pasta'];

export function SecaoVitrine() {
    const [paginaAtual, setPaginaAtual] = useState(1); // Estado para controlar a página atual

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
                    setReceitas(response || [])
                    setPaginaAtual(1); // Reseta para a primeira página ao buscar por nome
                } 
                // CENÁRIO B: Não tem busca? Então buscamos por CATEGORIA.
                else {
                    // Se não tiver filtro, garante o 'Beef' como padrão
                    const categoriasParaBuscar = filtrosSelecionados.length > 0 
                        ? filtrosSelecionados 
                        : ['Beef'];
                    
                    const response = await getAllMealsByCategories(categoriasParaBuscar);
                    setReceitas(response || []);
                    setPaginaAtual(1); // Reseta para a primeira página ao filtrar por categoria
                }
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setReceitas([]); // Em caso de erro, limpa a lista
            }
        }
        fetchReceitas();
    }, [filtrosSelecionados, textoBusca]); // Roda sempre que um dos dois mudar

    // Variáveis para paginação
    const ITENS_POR_PAGINA = 9;
    const indiceUltimoItem = paginaAtual * ITENS_POR_PAGINA;
    const indicePrimeiroItem = indiceUltimoItem - ITENS_POR_PAGINA;
    const receitasPaginaAtual = receitas.slice(indicePrimeiroItem, indiceUltimoItem);
    const totalPaginas = Math.ceil(receitas.length / ITENS_POR_PAGINA);

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
        <section id="vitrine">
            <div>
                <h2>Receitas</h2>
                <p>hajbdsjabhdoja ahsdjhasljd hlaj akshjdlkjahsj ajhdjksahjldhajl ajxcoanjcoid aod ianjdsljkandkljashn oaidjsoanljansdoi aoidjsoanj</p>
            </div>
            <div id='vitrine' className="flex flex-row items-center flex-start gap-[50px]">
                <div id='filtrar' className="flex flex-col items-start gap-[10px]">
                    <span>Filtros</span>
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
                        {receitasPaginaAtual.map(receita => (
                            <RecipeCard key={receita.idMeal} receita={receita} />
                        ))}
                    </div>

                    {/* Mensagem caso não tenha resultados */}
                    {receitas.length === 0 && (
                    <div className="w-full text-center py-10">
                        <p className="text-gray-500 text-xl">Nenhuma receita encontrada. 😔</p>
                    </div>
                    )}
                </div>
            </div>

            {/* Botões de Paginação */}
            {totalPaginas > 1 && (<PageButtons
                paginaAtual={paginaAtual}
                setPaginaAtual={setPaginaAtual}
                totalItens={receitas.length}
                itensPorPagina={ITENS_POR_PAGINA}
            />)}
        </section>
    )
}
