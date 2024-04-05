import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct";
import Empty from "../../components/Empty";
import { Button, ButtonText } from "../../components/GlobalStyles";
import { useCarrinho } from "../../context/CarrinhoContext";
import { CartArea, Divider, FooterCart, LinkFinalizado, ProductsArea, TextCart, TitleArea, TotalArea, TotalValue } from "./styles";
import { StyleSheetManager } from 'styled-components';

function Carrinho() {
    const { carrinhoItems, calcularSubtotalCarrinho } = useCarrinho();
    const [subtotal, setSubtotal] = useState<number | null>(null);

    useEffect(() => {
        const subtotalCarrinho = calcularSubtotalCarrinho();
        setSubtotal(subtotalCarrinho);
    }, [carrinhoItems, calcularSubtotalCarrinho]);

    if (carrinhoItems.length === 0) {
        return <Empty fromCarrinho={true} />;
    }

    return (
        <CartArea>
            <TitleArea>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'first'}>
                    <TextCart $first={true}>PRODUTO</TextCart>
                </StyleSheetManager>
                <StyleSheetManager shouldForwardProp={(prop) => prop !== 'second'}>
                    <TextCart $second={true}>QTD</TextCart>
                    <TextCart $second={true}>SUBTOTAL</TextCart>
                </StyleSheetManager>

            </TitleArea>
            <ProductsArea>
                {
                    carrinhoItems.map((item) => (
                        <CartProduct key={item.id} movie={item} />
                    ))
                }
            </ProductsArea>
            <Divider />
            <FooterCart>
                <TotalArea>
                    <TextCart>TOTAL</TextCart>
                    <TotalValue>R$ {subtotal ? subtotal.toFixed(2).replace('.', ',') : '0,00'}</TotalValue>
                </TotalArea>
                <LinkFinalizado to="/finalizado">
                    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'second'}>
                        <Button $secondary={true}>
                            <ButtonText>FINALIZAR PEDIDO</ButtonText>
                        </Button>
                    </StyleSheetManager>
                </LinkFinalizado>
            </FooterCart>
        </CartArea>
    )
}

export default Carrinho;