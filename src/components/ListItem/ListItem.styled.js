import styled from 'styled-components';

export const ListItem = styled.div`
    width: 600px;
    min-height: 35px;
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    padding: 3px;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid black;
    border-radius: 3px;
    cursor: default;
    margin: 5px 0;
    user-select: none;
    position: relative;
`;

export const DragControl = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -35px;
    font-weight: bold;
    font-size: 20px;
    cursor: move;
`;
