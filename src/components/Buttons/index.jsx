import styled, {css} from "styled-components";
import {Link} from 'react-router-dom';

const disabledStyles = css`
    filter: brightness(1);
    background-color: ${({theme}) =>
            theme.colors.button.disabledBackgroundColor};
    box-shadow: ${({theme}) =>
            theme.boxShadow.disabledButton};
    cursor: auto;
    border-color: ${({theme}) =>
            theme.colors.button.disabledBorderColor};
`;

const buttonStyles = css`
    background-color: ${({theme}) =>
            theme.colors.button.backgroundColor};
    color: ${({theme}) => theme.colors.button.text};
    padding: 10px 15px;
    border: 2px solid ${({theme}) =>
            theme.colors.button.borderColor};
    border-radius: 10px;
    min-width: max-content;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: 0.1s filter;
    box-shadow: ${({theme}) =>
            theme.boxShadow.button};

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        box-shadow: ${({theme}) =>
                theme.boxShadow.activeButton};
    }

    &:disabled {
        ${disabledStyles}
    }

    ${({$disabled}) => $disabled && css`
        ${disabledStyles}
    `};

    @media (max-width: 700px ) {
        padding: 10px;
    }
`;


export const Button = styled.button`
    ${buttonStyles};
    ${({$area}) => $area && css`
        width: 100%;
        grid-area: ${$area};
    `};
    ${({$area}) => $area === "random" && css`
        margin: 20px 0;

        @media (max-width: 700px ) {
            margin: 10px 0;
        }
    `};
`;

export const StyledLink = styled(Link)`
    ${buttonStyles};
    text-decoration: none;
    margin: 30px 0;
`;

export const Back = styled(Link)`
    ${buttonStyles};
    text-decoration: none;
    align-self: flex-start;
    padding: 10px;

    @media (max-width: 700px ) {
        padding: 5px;
    }
`;

export const Exit = styled(Back)`
    align-self: flex-end;
`;