import React, { useState, useEffect } from 'react';
import arrayMove from 'array-move';

import './assets/global.css';

import * as s from './App.styled';

import SortableList from './components/List';

import { initialValues, addValuesToLocalStorage } from './store';

const App = () => {
    const [items, setItems] = useState(initialValues);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState(items.slice(currentPage * 10 - 10, currentPage * 10));
    const [text, setText] = useState('');

    useEffect(() => {
        setCurrentPageData(items.slice(currentPage * 10 - 10, currentPage * 10))
    }, [items, currentPage]);

    useEffect(() => {
        if (Math.ceil(items.length / 10) < currentPage) {
            setCurrentPage(currentPage - 1)
        }
        if(items.length + 1 === 1) {
            setCurrentPage(1);
        }
        addValuesToLocalStorage(items);
    }, [items]);

    const addNewItem = (id, value) => {
        if (value === '') {
            setText('');
        } else {
            const newItem = { id, value };
            setItems([...items, newItem]);
            setText('');
        }
    }

    const onSortEnd = ({ oldIndex, newIndex }) => {
        if (currentPage === 1) {
            setCurrentPageData(arrayMove(currentPageData, oldIndex, newIndex));
            setItems(arrayMove(items, oldIndex, newIndex));
        } else {
            setCurrentPageData(arrayMove(currentPageData, oldIndex, newIndex));
            setItems(arrayMove(items, oldIndex + 10 * currentPage - 10, newIndex + 10 * currentPage - 10));
        }
    };

    return (
        <s.Container>
            <s.AddNew>
                <input type='text' value={text} placeholder='New Item' onChange={(e) => setText(e.target.value)} />
                <button onClick={() => addNewItem(items.length + 1, text)}>Add</button>
            </s.AddNew>
            {items.length > 0 ?
                <>
                    <SortableList
                        items={currentPageData}
                        onSortEnd={onSortEnd}
                        allItems={items}
                        setItems={setItems}
                        currentPage={currentPage}
                        useDragHandle
                    />
                    <s.Pagination>
                        <button onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}>{'<<'}</button>
                        {Array(Math.ceil(items.length / 10)).fill().map((item, i) => (
                            <s.PaginationItem key={i} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</s.PaginationItem>
                        ))}
                        <button onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(items.length / 10)))}>{'>>'}</button>
                    </s.Pagination>
                </>
                :
                <div>List is empty. Add something pls ^</div>
            }
        </s.Container>
    );
}

export default App;
