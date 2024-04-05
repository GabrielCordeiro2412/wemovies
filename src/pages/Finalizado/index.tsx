import { useNavigate } from "react-router-dom";
import { EmptyArea, NothingImage, NothingTitle } from "../../components/Empty/styles";
import { Button, ButtonText } from "../../components/GlobalStyles";
import Finalizada from "../../assets/finalizado.svg"
import { useCarrinho } from "../../context/CarrinhoContext";
import { useEffect } from "react";

function Finalizado(){
    const navigate = useNavigate();
    const {limparCarrinho} = useCarrinho();

    useEffect(() => {
        limparCarrinho();
    }, [])

    const handleButtonClick = () => {
            
            navigate("/");
    };

    return(
        <EmptyArea>
            <NothingTitle>Compra realizada com sucesso!</NothingTitle>
            <NothingImage src={Finalizada} alt="Compra Finalizada" />
            <Button onClick={handleButtonClick}>
                <ButtonText>Voltar</ButtonText>
            </Button>
        </EmptyArea>
    )
}

export default Finalizado;