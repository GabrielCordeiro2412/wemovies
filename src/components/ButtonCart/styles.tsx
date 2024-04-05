import styled from 'styled-components'

export const ButtonCartArea = styled.button`
    background-color: ${({ theme }) => theme.colors.blue.light};
    padding: 11px 51.03px;
    gap: 12px;
    display: flex;
    border-radius: 4px;
    border: none;
    align-items: center;
    transition: background-color 0.3s;

    &:hover{
        background-color: ${({ theme }) => theme.colors.blue.dark};
    }
`

export const CartInfoArea = styled.div`
    gap: 3.4px;
    display: flex;
    align-items: center;
`

export const CartImage = styled.img`
    width: 13.6px;
    height: 13.6px;
`

export const CartNumber = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.white};
`

export const ButtonTitle = styled.h1`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`