import styled, { keyframes } from 'styled-components';

interface ButtonProps {
    $secondary: boolean;
}

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Spinner = styled.div`
    border: 4px solid #fff;
    border-left-color: #333;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinAnimation} 0.6s linear infinite;
`;

export const Button = styled.button<ButtonProps>`
    background-color: ${({ theme }) => theme.colors.blue.light};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 11px 8px;
    transition: background-color 0.3s;
    width: 173px;

    &:hover{
        background-color: ${({ theme }) => theme.colors.blue.dark};
    }

    ${({ $secondary }) =>
        $secondary &&
        `
        @media (max-width: 768px) {
            width: 100%;
        }
        width: 173px;
    `}
`;

export const ButtonText = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
`;