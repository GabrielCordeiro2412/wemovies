import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderArea = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    max-height: 88px;
    padding: 31.5px 16px;
    justify-content: space-between;
    align-items: center;

`
export const LinkCart = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const ItensHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`

export const ItemMenuCart = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ItemMenu = styled.h2`
    color: ${({ theme }) => theme.colors.grey};
    font-size: 12px;
`

export const LinkHome = styled(Link)`
    text-decoration: none;
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
`

export const CartImage = styled.img`
    width: 24px;
    height: 20px;
`