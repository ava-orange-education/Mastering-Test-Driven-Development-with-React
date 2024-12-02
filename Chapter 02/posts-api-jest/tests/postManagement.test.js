const request = require('supertest');
const app = require('../main');

describe('Post Management API', () => {
    let postId;

    // Test the POST /api/posts route to create a new post
    describe('POST /api/posts', () => {
        it('should create a new post', async () => {
            const post = {
                title: 'New Post',
                content: 'This is the content of the new post'
            };

            const response = await request(app)
                .post('/api/posts')
                .send(post);

            expect(response.status).toBe(201);
            expect(response.body.title).toBe(post.title);
            expect(response.body.content).toBe(post.content);
            console.log(`------------------------------------`);
            console.log(response.body);
            console.log(`------------------------------------`);
            postId = response.body.id; // Store the ID of the new post for future tests
        });

        it('should return a 400 error if title is missing', async () => {
            const post = {
                content: 'This is the content of the new post'
            };

            const response = await request(app)
                .post('/api/posts')
                .send(post);

            expect(response.status).toBe(400);
        });

        it('should return a 400 error if content is missing', async () => {
            const post = {
                title: 'New Post'
            };

            const response = await request(app)
                .post('/api/posts')
                .send(post);

            expect(response.status).toBe(400);
        });
    });

    // Test the GET /api/posts/:id route to read a post
    describe('GET /api/posts/:id', () => {
        it('should return a specific post', async () => {
            const response = await request(app)
                .get(`/api/posts/${postId}`);
            expect(response.status).toBe(200);
            expect(response.body.id).toBe(postId);
            expect(response.body.title).toBeDefined();
            expect(response.body.content).toBeDefined();
        });

        it('should return a 404 error if post ID is invalid', async () => {
            const response = await request(app)
                .get('/api/posts/invalid-id');

            expect(response.status).toBe(404);
        });
    });

    // Test the PUT /api/posts/:id route to update a post
    describe('PUT /api/posts/:id', () => {
        it('should update a specific post', async () => {
            const updatedPost = {
                title: 'Updated Post',
                content: 'This is the updated content of the post'
            };

            const response = await request(app)
                .put(`/api/posts/${postId}`)
                .send(updatedPost);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(updatedPost.title);
            expect(response.body.content).toBe(updatedPost.content);
        });

        it('should return a 404 error if post ID is invalid', async () => {
            const updatedPost = {
                title: 'Updated Post',
                content: 'This is the updated content of the post'
            };

            const response = await request(app)
                .put('/api/posts/invalid-id')
                .send(updatedPost);

            expect(response.status).toBe(404);
        });
    });

    // Test the DELETE /api/posts/:id route to delete a post
    describe('DELETE /api/posts/:id', () => {
        it('should delete a specific post', async () => {
            const response = await request(app)
                .delete(`/api/posts/${postId}`);

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Post successfully deleted');
        });
    });
});
