const express = require('express');
const router = express.Router();

// Sample data
const items = [
  { id: 1, name: 'Item 1', description: 'First item' },
  { id: 2, name: 'Item 2', description: 'Second item' }
];

// GET all items
router.get('/items', (req, res) => {
  res.json(items);
});

// GET single item
router.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST new item
router.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  
  const newItem = {
    id: Math.max(...items.map(i => i.id), 0) + 1,
    name,
    description: description || ''
  };
  
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
router.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item not found' });
  
  if (req.body.name) item.name = req.body.name;
  if (req.body.description) item.description = req.body.description;
  
  res.json(item);
});

// DELETE item
router.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});

module.exports = router;
