import styled, {css} from 'styled-components';

export const PlayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    min-width: 380px;
    background-color: bisque;
    margin: 10px;
`;

export const SetShips = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
    justify-content: center;
    padding: 50px;
    
    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;

export const ShipsBoard = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 10%);
    grid-template-columns: repeat(10, 10%);
    grid-auto-flow: column;
    //min-width: 200px;
    width: 600px;
    aspect-ratio: 1/1;
    border: 3px solid #2b2b2b;

    @media (max-width: 700px) {
        width: 85vw;
    }
`;

export const BoardCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid lightgrey;
    border-collapse: collapse;
    aspect-ratio: 1/1;
    position: relative;
`

export const ColName = styled.div`
    position: absolute;
    top: calc(-1.2rem - 8px);
    font-size: 1.2rem;
    color: black;
    text-align: center;
    width: 100%;
`;

export const RowName = styled.div`
    position: absolute;
    left: calc(-100% - 8px);
    font-size: 1.2rem;
    color: black;
    width: 100%;
    text-align: right;
`;

export const ShipItem = styled.div`
    background-color: blue;
    width: 100%;
    height: 100%;
    position: absolute;
    outline: 1px solid black;
    border-radius: 45%;
    margin: 20px;
    border: 2px solid black;

    ${({$hasNeighborTop}) => $hasNeighborTop && css`
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-top: 0;
    `}
    ${({$hasNeighborRight}) => $hasNeighborRight && css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
    `}
    ${({$hasNeighborBottom}) => $hasNeighborBottom && css`
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom: 0;
    `}
    ${({$hasNeighborLeft}) => $hasNeighborLeft && css`
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
    `}
`

export const Reserved = styled.div`
    background-color: #d6f4ff;
    width: 100%;
    height: 100%;
    position: absolute;
`

export const Settings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;