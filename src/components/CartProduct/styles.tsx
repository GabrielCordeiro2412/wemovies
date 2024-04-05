import styled from "styled-components";

interface InfoProps {
    first?: boolean;
    second?: boolean;
}

export const CartMovieArea = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
`

export const MovieImage = styled.img`
    @media (max-width: 768px) {
        height: 82px;
        width: 64px;
    }

    height: 114px;
    width: 91px;
    
`

export const ProductInfoArea = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    
`

export const ProductInfo = styled.div<InfoProps>`

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    justify-content: center;
    display: flex;
    flex-direction: column;
    

    ${({ first }) =>
        first &&
        `
        width: 176px;
    `}
    ${({ second }) =>
        second &&
        `
        width: 720px;
        justify-content: flex-start;
        flex-direction: row;
    `}
`

export const MovieTitle = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.background};
    font-weight: bold;
`

export const PriceDeleteArea = styled.div`
    display: flex;
    gap: 16px;
`

export const MoviePrice = styled.span`
    color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    font-weight: bold;
    @media (min-width: 768px) {
        width: 348px;
    }
`

export const DeleteImage = styled.img`
    @media (max-width: 768px) {
        width: 16px;
        height: 18px;
    }
    @media (min-width: 768px) {
        display: none
    }

    ;
    
`
export const DeleteImageWeb = styled.img`
    width: 24px;
    height: 24px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const QuantityArea = styled.div`
    @media (min-width: 768px) {
        width: 348px;
        justify-content: flex-start;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
`

export const QtdControlImage = styled.img`
    height: 18px;
    width: 18px;
`

export const QuantityValue = styled.span`
    padding: 1px 25px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
`

export const SubTotalArea = styled.div`
    @media (min-width: 768px) {
            width: 372px;
            justify-content: flex-start;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    display: flex;
    align-items: center;
    justify-content: center;

`