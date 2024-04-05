import { ButtonCartArea, ButtonTitle, CartImage, CartInfoArea, CartNumber } from "./styles";
import CartBtn from "../../assets/cart-button.svg"

interface ButtonCartProps {
    adicionarAoCarrinho: () => void; // Sem argumentos
}

function ButtonCart({ adicionarAoCarrinho }: ButtonCartProps) {
    return (
        <ButtonCartArea onClick={() => adicionarAoCarrinho()}>
            <CartInfoArea>
                <CartImage src={CartBtn} alt="Carrinho" />
                <CartNumber>0</CartNumber>
            </CartInfoArea>
            <ButtonTitle>ADICIONAR AO CARRINHO</ButtonTitle>
        </ButtonCartArea>
    )
}

export default ButtonCart;