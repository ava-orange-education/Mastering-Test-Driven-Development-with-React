const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

app.use(bodyParser.json());

const comments = {};
const posts = {};

// Comment API Routes

// POST /comments
app.post('/comments', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send({ error: 'Text is required' });
    }
    const id = uuidv4();
    comments[id] = { id, text };
    res.status(201).send(comments[id]);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments[id];
    if (!comment) {
        return res.status(404).send({ error: 'Comment not found' });
    }
    res.send(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    if (!comments[id]) {
        return res.status(404).send({ error: 'Comment not found' });
    }
    delete comments[id];
    res.status(204).send();
});

// Post Management API Routes

// POST /api/posts
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).send({ error: 'Title and content are required' });
    }
    const id = uuidv4();
    posts[id] = { id, title, content };
    res.status(201).send(posts[id]);
});

// GET /api/posts/:id
app.get('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts[id];
    if (!post) {
        return res.status(404).send({ error: 'Post not found' });
    }
    res.send(post);
});

// PUT /api/posts/:id
app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = posts[id];
    if (!post) {
        return res.status(404).send({ error: 'Post not found' });
    }
    if (!title || !content) {
        return res.status(400).send({ error: 'Title and content are required' });
    }
    posts[id] = { id, title, content };
    res.send(posts[id]);
});

// DELETE /api/posts/:id
app.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts[id];
    if (!post) {
        return res.status(404).send({ error: 'Post not found' });
    }
    delete posts[id];
    res.send({ message: 'Post successfully deleted' });
});

const PORT = process.env.PORT || 4304;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
