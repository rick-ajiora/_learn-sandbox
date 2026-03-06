import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  // Fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/items');
      if (!response.ok) throw new Error('Failed to fetch items');
      const data = await response.json();
      setItems(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItem.name.trim()) {
      setError('Item name is required');
      return;
    }

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      
      if (!response.ok) throw new Error('Failed to add item');
      const addedItem = await response.json();
      setItems([...items, addedItem]);
      setNewItem({ name: '', description: '' });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete item');
      setItems(items.filter(item => item.id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Learning App</h1>
        <p>Manage your items with React + Express</p>
      </header>

      <main className="main-content">
        <div className="container">
          {error && <div className="error-message">{error}</div>}

          <form className="form" onSubmit={handleAddItem}>
            <h2>Add New Item</h2>
            <input
              type="text"
              placeholder="Item name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="input"
            />
            <textarea
              placeholder="Item description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="textarea"
            ></textarea>
            <button type="submit" className="button">Add Item</button>
          </form>

          {loading ? (
            <div className="loading">Loading items...</div>
          ) : (
            <ItemList items={items} onDelete={handleDeleteItem} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
