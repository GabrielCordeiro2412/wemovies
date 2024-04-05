import { ButtonCartArea, ButtonTitle, CartImage, CartInfoArea, CartNumber } from "./styles";
import CartBtn from "../../assets/cart-button.svg"
import { StyleSheetManager } from 'styled-components';

interface ButtonCartProps {
    adicionarAoCarrinho: () => void;
    incart: boolean;
    quantitycart: number;
}
function ButtonCart({ adicionarAoCarrinho, incart, quantitycart }: ButtonCartProps) {
    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'incart'}>
            <ButtonCartArea $incart={incart} onClick={() => adicionarAoCarrinho()}>
                <CartInfoArea>
                    <CartImage src={CartBtn} alt="Carrinho" />
                    <CartNumber>{quantitycart}</CartNumber>
                </CartInfoArea>
                <ButtonTitle>ADICIONAR AO CARRINHO</ButtonTitle>
            </ButtonCartArea>
        </StyleSheetManager>
    )
}

export default ButtonCart;