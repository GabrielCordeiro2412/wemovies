import styled from 'styled-components'

interface InputProps{
    $isfocused: boolean;
}

export const ListProductsArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0px 16px;
`

export const InputMovie = styled.input`
    flex: 1;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};

    &:focus {
        outline: none;
    }
`

export const InputMovieArea = styled.div<InputProps>`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    height: 56px;
    display: flex;
    align-items: center;
    padding: 16px 16px 18px 16px;
    gap: 16px;

    ${({ $isfocused, theme }) =>
        $isfocused &&
        `
        border: 3px solid ${theme.colors.blue.light};
      `}

`

export const SearchImage = styled.img`
    height: 24px;
`

export const MoviesList = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 24px;

    @media (max-width: 1079px) {
        justify-content: center;
    }
`
export const NotFoundTitle = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
`

export const NotFoundArea = styled.div`
    width: 100%;
    max-width: 1080px;
    displaY: flex;
    justify-content: center;
    align-items: center;
`