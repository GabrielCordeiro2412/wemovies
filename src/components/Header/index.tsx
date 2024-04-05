import { CartImage, HeaderArea, Title, ItensHeader, ItemMenu, ItemMenuCart, LinkHome, LinkCart } from "./style";
import Cart from "../../assets/cart.svg"
import { useCarrinho } from "../../context/CarrinhoContext";

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