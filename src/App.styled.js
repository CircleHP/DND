import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AddNew = styled.div`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    input {
        height: 35px;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 3px 0 0 3px;
        outline: none;
    }

    button {
        height: 35px;
        border: 1px solid black;
        border-left: none;
        border-radius: 0 3px 3px 0;
        cursor: pointer;
        font-weight: bold;
        transition: all .25s;

        &:hover {
            opacity: 0.5;
        }
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        margin: 15px;
    }
`;

export const PaginationItem = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.active ? 'rgba(0,0,0,0.5)' : ''};
    color: ${(props) => props.active ? '#fff' : ''};
    cursor: pointer;
`;
