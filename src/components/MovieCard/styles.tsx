import styled from 'styled-components'

export const MovieCardArea = styled.div`
    max-width: 338.67px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 16px;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.white};
`

export const MovieImage = styled.img`
    height: 188px;
    width: 147px;
`

export const MovieTitle = styled.h1`
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`

export const MoviePrice = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`