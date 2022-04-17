import React, { useState } from 'react';

export default function Items({ items, setItemDetail }) {
  const [selectedItemIndex, setSelectedItemIndex] = useState();

  const setItemSelected = (item, index) => {
    setItemDetail(index);
    setSelectedItemIndex(index);
  };

  return (
    <div className="col-sm">
      <div className="items">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={index === selectedItemIndex ? 'item selected' : 'item'}
            onClick={() => setItemSelected(item, index)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
