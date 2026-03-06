import React from 'react';

function ItemList({ items, onDelete }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>No items yet. Create one to get started! 🚀</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ color: 'white', marginBottom: '1rem' }}>Items ({items.length})</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <div className="item-id">ID: {item.id}</div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button
              className="delete-button"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
