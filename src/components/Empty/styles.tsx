import styled from 'styled-components'

export const EmptyArea = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    max-width: 1048px;
    height: 596px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    border-radius: 4px;
    gap: 24px;


    @media (max-width: 1047px) {
        max-width: calc(100% - 32px); /* 100% - (16px + 16px) */
        margin-left: 16px;
        margin-right: 16px;
    }

`
export const NothingTitle = styled.h1`
    color: ${({ theme }) => theme.colors.background};
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 1047px) {
        max-width: 200px;
    }
`;

export const NothingImage = styled.img`
    height: 265.36px;
`
