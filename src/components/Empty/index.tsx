import { NotFoundArea, NothingImage, NothingTitle } from "./styles";
import Nothing from "../../assets/nothing.svg"
import { Button, ButtonText } from "../GlobalStyles";
import { useNavigate } from "react-router-dom";


interface EmptyProps {
    onReload?: () => void;
    fromCarrinho?: boolean;
}

function Empty({ onReload, fromCarrinho }: EmptyProps) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (fromCarrinho) {
            navigate("/");
        } else {
            onReload && onReload();
        }
    };

    return (
        <NotFoundArea>
            <NothingTitle>Parece que não há nada por aqui :(</NothingTitle>
            <NothingImage src={Nothing} alt="Nada Aqui!" />
            <Button onClick={handleButtonClick}>
                <ButtonText>{fromCarrinho ? "Voltar" : "Recarregar página"}</ButtonText>
            </Button>
        </NotFoundArea>
    )
}

export default Empty;