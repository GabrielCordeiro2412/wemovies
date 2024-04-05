import { useEffect, useState } from "react";
import CartProduct from "../../components/CartProduct";
import Empty from "../../components/Empty";
import { Button, ButtonText } from "../../components/GlobalStyles";
import { useCarrinho } from "../../context/CarrinhoContext";
import { CartArea, Divider, FooterCart, ProductsArea, TextCart, TitleArea, TotalArea, TotalValue } from "./styles";


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
                <TextCart first>PRODUTO</TextCart>
                <TextCart second>QTD</TextCart>
                <TextCart second>SUBTOTAL</TextCart>
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
                    <TotalValue>R$ {subtotal ? subtotal.toFixed(2) : '0.00'}</TotalValue>
                </TotalArea>
                <Button secondary>
                    <ButtonText>FINALIZAR PEDIDO</ButtonText>
                </Button>
            </FooterCart>
        </CartArea>
    )
}

export default Carrinho;