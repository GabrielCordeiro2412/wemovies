import { useCarrinho } from "../../context/CarrinhoContext";
import { Product } from "../../types/Product";
import ButtonCart from "../ButtonCart";
import { MovieCardArea, MovieImage, MoviePrice, MovieTitle } from "./styles";

interface MovieCardProps {
    movie: Product;
}
function MovieCard({ movie }: MovieCardProps) {

    const { adicionarAoCarrinho, carrinhoItems } = useCarrinho();

    const isInCart = carrinhoItems.find(item => item.id === movie.id);
    const quantityInCart = isInCart ? isInCart.quantity : 0;

    return (
        <MovieCardArea>
            <MovieImage src={movie.image} alt="Filme" />
            <MovieTitle>{movie.title}</MovieTitle>
            <MoviePrice>R$ {movie.price.toFixed(2).replace('.', ',')}</MoviePrice>
            <ButtonCart
                adicionarAoCarrinho={() => adicionarAoCarrinho(movie)}
                incart={isInCart !== undefined}
                quantitycart={quantityInCart}
            />
        </MovieCardArea>
    )
}

export default MovieCard;