const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../main'); // Ensure your app file exports correctly
const should = chai.should(); // Activates 'should' assertions

chai.use(chaiHttp);

let commentId;

// Test the POST /comments route
describe('POST /comments', () => {
    it('should add a new comment', (done) => {
        const comment = {
            text: 'This is a test comment',
            author: 'Test User'
        };

        chai.request(app)
            .post('/comments')
            .send(comment)
            .end((err, res) => {
                commentId = res.body.id;
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('text').equal(comment.text);
                done();
            });
    });
});

// Test the comment API
describe('Comments API', () => {
    // Test the GET /comments route
    describe('GET /comments', () => {
        it('should return all comments', (done) => {
            chai.request(app)
                .get('/comments/' + commentId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('text');
                    done();
                });
        });
    });



    // Test the DELETE /comments/:id route
    describe('DELETE /comments/:id', () => {
        it('should delete the specified comment', (done) => {
            const comment = {
                text: 'This is a test comment',
                author: 'Test User'
            };

            // First, add a comment to delete later
            chai.request(app)
                .post('/comments')
                .send(comment)
                .end((err, res) => {
                    const commentId = res.body.id;

                    // Now, delete the added comment
                    chai.request(app)
                        .delete('/comments/' + commentId)
                        .end((err, res) => {
                            res.should.have.status(204);
                            done();
                        });
                });
        });
    });
});
