import { Product } from "../../types/Product";
import { CartMovieArea, DeleteImage, MovieImage, MoviePrice, MovieTitle, PriceDeleteArea, ProductInfoArea, ProductInfo, QuantityArea, QtdControlImage, QuantityValue, SubTotalArea, DeleteImageWeb } from "./styles";
import Delete from '../../assets/delete.svg'
import Remove from '../../assets/remove.svg'
import Add from '../../assets/add.svg'
import { TextCart } from "../../pages/Carrinho/styles";
import { useCarrinho } from "../../context/CarrinhoContext";

interface MovieCardProps {
    movie: Product;
}

function CartProduct({ movie }: MovieCardProps) {

    const { removerDoCarrinho, removerTodosDoCarrinho, adicionarAoCarrinho, calcularSubtotalItem } = useCarrinho();

    const handleAddClick = () => {
        adicionarAoCarrinho(movie)
    };

    const handleDeleteClick = () => {
        removerTodosDoCarrinho(movie.id);
    };

    const handleRemoveClick = () => {
        removerDoCarrinho(movie.id);
    };

    const subtotal = calcularSubtotalItem(movie.id);

    return (
        <CartMovieArea>
            <MovieImage src={movie.image} />
            <ProductInfoArea>
                <ProductInfo first>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <PriceDeleteArea>
                        <MoviePrice>R$ {movie.price}</MoviePrice>
                        <DeleteImage src={Delete} alt="Remover" onClick={handleDeleteClick} />
                    </PriceDeleteArea>
                </ProductInfo>
                <ProductInfo second>
                    <QuantityArea>
                        <QtdControlImage src={Remove} alt="Remover" onClick={handleRemoveClick} />
                        <QuantityValue>{movie.quantity || 0}</QuantityValue>
                        <QtdControlImage src={Add} alt="Adicionar" onClick={handleAddClick} />
                    </QuantityArea>
                    <SubTotalArea>
                        <TextCart web>SUBTOTAL</TextCart>
                        <MoviePrice>R$ {subtotal}</MoviePrice>
                        <DeleteImageWeb src={Delete} alt="Remover" onClick={handleDeleteClick} />
                    </SubTotalArea>
                </ProductInfo>
            </ProductInfoArea>
        </CartMovieArea>
    )
}

export default CartProduct;