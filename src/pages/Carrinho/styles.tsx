import { Link } from 'react-router-dom';
import styled from 'styled-components'

interface TextProps {
    $first?: boolean;
    $second?: boolean;
    $web?: boolean;
}

export const CartArea = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 1048px;
    margin: 0 auto;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 24px;

    @media (max-width: 1048px) {
        max-width: calc(100% - 32px); /* 100% - (16px + 16px) */
        padding: 16px;
        gap: 21px;
    }
`

export const TitleArea = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ProductsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const FooterCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

export const Divider = styled.hr`
    width: 100%;
`

export const TotalArea = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 200px;
    
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    
`

export const TextCart = styled.span<TextProps>`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: bold;

    ${({ $first }) =>
        $first &&
        `
        width: 280px;
    `}
    ${({ $second }) =>
        $second &&
        `
        width: 348px;
    `}
    ${({ $web }) =>
        $web &&
        `
        display: none;
    `}

`

export const TotalValue = styled.span`
    color: ${({ theme }) => theme.colors.background};
    font-size: 24px;
    font-weight: bold;
`

export const LinkFinalizado = styled(Link)`
    text-decoration: none;
    width: 100%
`