import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import * as s from './List.styled';
import SortableItem from '../ListItem';

const SortableList = SortableContainer(({ items, allItems, setItems, currentPage }) => {
    return (
        <s.ListContainer>
            {items.map((item, index) => (
                <SortableItem
                key={`item-${index}`}
                index={index}
                id={item.id}
                currentPage={currentPage}
                value={item.value}
                allItems={allItems}
                setItems={setItems}
            />
            ))}
        </s.ListContainer>
    );
});

export default SortableList;
