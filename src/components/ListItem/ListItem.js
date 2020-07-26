import React, { useState, useEffect } from 'react';
import { SortableElement, sortableHandle } from 'react-sortable-hoc';

import * as s from './ListItem.styled';

const DragHandle = sortableHandle(() => <s.DragControl>::</s.DragControl>);

const SortableItem = SortableElement(({ value, id, allItems, setItems, currentPage }) => {
    const [isEditable, setEditable] = useState(false);
    const [text, setText] = useState(value);

    useEffect(() => {
        setText(value);
    }, [value]);

    useEffect(() => {
        setEditable(false);
    }, [currentPage, allItems])

    const handleDeleteion = () => {
        setItems(allItems.filter((itemToDelete) => itemToDelete.id !== id))
    };

    const handleUpdate = () => {
        setItems(allItems.map((item) => item.id === id ? { id: id, value: text } : item));
        setEditable(false);
    }
    return (
        <s.ListItem onDoubleClick={() => setEditable(true)}>
            {isEditable ?
                <>
                    <input placeholder={text} value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={() => {
                        !isEditable ? setEditable(true) : handleUpdate();
                    }}>{isEditable ? 'save' : 'edit'}</button>
                    <button onClick={() => handleDeleteion()}>delete</button>
                </>
                :
                <>
                    <DragHandle />
                    <div>{value}</div>
                </>
            }
        </s.ListItem>
    );
});

export default SortableItem;
