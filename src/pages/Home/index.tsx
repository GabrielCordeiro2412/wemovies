import React, { useState, useEffect, ChangeEvent } from 'react';
import { getProdutos } from '../../services/apiService';
import { Product } from '../../types/Product';


import { InputMovie, InputMovieArea, ListProductsArea, MoviesList, NotFoundArea, NotFoundTitle, SearchImage } from './styles';
import Search from '../../assets/search.svg'
import ActivityIndicator from '../../components/ActivityIndicator';
import MovieCard from '../../components/MovieCard';
import Empty from '../../components/Empty';

import { StyleSheetManager } from 'styled-components';


function Home() {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProdutos, setFilteredProdutos] = useState<Product[]>([]);
    const [notFound, setNotFound] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getProdutos();
            setProdutos(data);
            setLoading(false);
            setNotFound(false)
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleReload = () => {
        fetchData();
    };


    const handleFilterMovies = () => {
        const filtered = produtos.filter((produto) =>
            produto.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filtered.length == 0) {
            setNotFound(true)
        } else {
            setNotFound(false)
        }

        setFilteredProdutos(filtered);

        updateURL(searchTerm);
    }


    const updateURL: (searchTerm: string) => void = (searchTerm) => {
        const params = new URLSearchParams();
        params.append('search-query', searchTerm);
        window.history.replaceState({}, '', `?${params}`);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    if (loading) {
        return (
            <ListProductsArea>
                <ActivityIndicator />
            </ListProductsArea>
        );
    }

    if (error || produtos.length === 0) {
        return <Empty onReload={handleReload} />;
    }

    return (
        <ListProductsArea>
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isfocused'}>
                <InputMovieArea $isfocused={inputFocus}>
                    <InputMovie
                        placeholder='Buscar filme pelo nome'
                        value={searchTerm}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        onChange={handleInputChange}
                    />

                    <SearchImage src={Search} alt='Pesquisa' onClick={handleFilterMovies} />
                </InputMovieArea>
            </StyleSheetManager>
            <MoviesList>
                {notFound ? (
                    <NotFoundArea>
                        <NotFoundTitle>Nenhum resultado encontrado.</NotFoundTitle>
                    </NotFoundArea>
                ) : filteredProdutos.length > 0 ? (
                    filteredProdutos.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    produtos.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </MoviesList>
        </ListProductsArea>
    )
}

export default Home;