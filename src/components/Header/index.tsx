import { CartImage, HeaderArea, HeaderMenu, Title, ItensHeader, ItemMenu, ItemMenuCart, LinkHome, LinkCart } from "./style";
import Cart from "../../assets/cart.svg"
import { useCarrinho } from "../../context/CarrinhoContext";
import { Link } from "react-router-dom";

function Header() {
    const { itemCount } = useCarrinho();
    return (
        <HeaderArea>
            <LinkHome to="/">
                <Title>WeMovies</Title>
            </LinkHome>


                <LinkCart to="/carrinho">
                    <ItensHeader>
                        <ItemMenuCart>Meu carrinho</ItemMenuCart>
                        <ItemMenu>{itemCount} itens</ItemMenu>
                    </ItensHeader>

                    <CartImage src={Cart} alt="Cart Icon" />
                </LinkCart>

        </HeaderArea>
    )
}

export default Header;