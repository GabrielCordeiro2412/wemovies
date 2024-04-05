import { useCarrinho } from "../../context/CarrinhoContext";
import { Product } from "../../types/Product";
import ButtonCart from "../ButtonCart";
import { MovieCardArea, MovieImage, MoviePrice, MovieTitle } from "./styles";

interface MovieCardProps {
    movie: Product;
}
function MovieCard({movie} : MovieCardProps){

    const { adicionarAoCarrinho } = useCarrinho();

    return(
        <MovieCardArea>
            <MovieImage src={movie.image} alt="Filme"/>
            <MovieTitle>{movie.title}</MovieTitle>
            <MoviePrice>R$ {movie.price}</MoviePrice>
            <ButtonCart adicionarAoCarrinho={() => adicionarAoCarrinho(movie)} />
        </MovieCardArea>
    )
}

export default MovieCard;