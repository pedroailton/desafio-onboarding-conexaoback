'use client';

import { useState, useEffect } from "react";

import { SearchBar } from "./SearchBar"
import { RecipeCard } from './RecipeCard'
import { FilterSelection } from './FilterSelection'
import { PageButtons } from "./PageButtons";

import { Meal, getAllMealsByCategories, getMealsByName } from "@/app/api/api";
import { Loading } from "./Loading/loading";

// Fingir que temos esses filtros disponíveis
const CATEGORIAS_DISPONIVEIS = ['Beef', 'Chicken', 'Dessert', 'Pasta'];

export function SecaoVitrine() {
    const [paginaAtual, setPaginaAtual] = useState(1); // Estado para controlar a página atual

    const [receitas, setReceitas] = useState<Meal[]>([]); // Estado para armazenar as receitas

    const [filtrosSelecionados, setFiltrosSelecionados] = useState<string[]>([]);

    const [textoBusca, setTextoBusca] = useState<string>('');

    const [carregando, setCarregando] = useState<boolean>(true);

    const [sucessoBusca, setSucessoBusca] = useState<boolean>(true);

    useEffect(() => {
        async function fetchReceitas() {  
            
            setCarregando(true);

            try {
                // CENÁRIO A: Tem texto na busca? Então buscamos por NOME.
                if (textoBusca.trim() !== '') {
                    const response = await getMealsByName(textoBusca);
                    setReceitas(response || [])
                    setSucessoBusca(response && response.length > 0);
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
                    setSucessoBusca(response && response.length > 0);
                    setPaginaAtual(1); // Reseta para a primeira página ao filtrar por categoria
                }
            } catch (error) {
                console.error('Erro ao buscar receitas:', error);
                setReceitas([]); // Em caso de erro, limpa a lista
                setSucessoBusca(false);
            } finally {
                setCarregando(false);

                if(sucessoBusca) {
                    console.log('Busca realizada com sucesso.');
                }
            }
        }
        fetchReceitas();
    }, [filtrosSelecionados, sucessoBusca, textoBusca]);

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
        <section id="vitrine" className="mt-6">
            <div className="flex flex-col items-center mb-8 gap-[10px]">
                <h2 className="text-[var(--preto)] text-center font-semibold">Receitas</h2>
                <p className="text-[var(--preto)] text-center text-[26px]">Descubra um mundo de possibilidades culinárias. De clássicos reconfortantes a sabores exóticos, nossa coleção diversificada foi pensada para transformar qualquer ingrediente em uma experiência inesquecível, independente da sua habilidade na cozinha.</p>
            </div>

            <div className="flex flex-row items-start mx-auto gap-[50px] px-[80px]">
                <div id='filtrar' className="flex flex-col w-max items-start gap-[10px]">
                    <h2>Filtros</h2>
                    {CATEGORIAS_DISPONIVEIS.map(categoria => (
                        <FilterSelection
                            key={categoria}
                            isChecked={filtrosSelecionados.includes(categoria)}
                            recipeName={categoria}
                            handleCheck={() => handleToggleFiltro(categoria)}
                        />
                    ))}
                </div>
                <div id='pesquisa-e-cards' className="justify-center flex flex-col items-center gap-[30px]">
                    <SearchBar textoBusca={textoBusca} aoDigitar={handleBusca} aoBuscar={() => {}} />

                    {carregando ? (
                        <Loading />
                    ) : (
                        <div>
                            <div id="cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                                {receitasPaginaAtual.map(receita => (
                                    <RecipeCard key={receita.idMeal} receita={receita} />
                                ))}
                            </div>

                            {/* Mensagem caso não tenha resultados */}
                            {receitas.length === 0 && (
                            <div className="w-full text-center py-10">
                                <p className="text-gray-500 text-xl">Nenhuma receita encontrada.</p>
                            </div>
                            )}
                        </div>
                    )
                    }
                </div>
            </div>
            {/* Botões de Paginação */}
            {totalPaginas > 1 && !carregando && (<PageButtons
                paginaAtual={paginaAtual}
                setPaginaAtual={setPaginaAtual}
                totalItens={receitas.length}
                itensPorPagina={ITENS_POR_PAGINA}
            />)}
        </section>
    )
}
