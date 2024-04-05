import React, { useState, useEffect } from 'react';
import { getProdutos } from '../../services/apiService';
import { Product } from '../../types/Product';


import { InputMovie, InputMovieArea, ListProductsArea, MoviesList, SearchImage } from './styles';
import Search from '../../assets/search.svg'
import ActivityIndicator from '../../components/ActivityIndicator';
import MovieCard from '../../components/MovieCard';
import Empty from '../../components/Empty';

function Home() {
    const [produtos, setProdutos] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getProdutos();
            setProdutos(data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
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

    if (loading) {
        return (
            <ActivityIndicator />
        );
    }

    if (error || produtos.length === 0) {
        return <Empty onReload={handleReload} />;
    }

    return (
        <ListProductsArea>
            <InputMovieArea>
                <InputMovie
                    placeholder='Buscar filme pelo nome'
                />
                <SearchImage src={Search} alt='Pesquisa' />
            </InputMovieArea>
            <MoviesList>
                {produtos.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </MoviesList>
        </ListProductsArea>
    )
}

export default Home;