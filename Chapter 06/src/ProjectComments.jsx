import React, { useState } from 'react';

const ProjectComments = ({ project }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);

  const addComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const editComment = (id, newText) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, text: newText, timestamp: new Date().toLocaleString() }
          : comment
      )
    );
    setEditingCommentId(null);
  };

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Project Comments</h2>
      <div>
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            {editingCommentId === comment.id ? (
              <div>
                <textarea
                  placeholder="Edit your comment"
                  defaultValue={comment.text}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  onClick={() => editComment(comment.id, newComment)}
                >
                  Save Edit
                </button>
              </div>
            ) : (
              <div>
                <p>{comment.text}</p>
                <span data-testid="comment-timestamp">{comment.timestamp}</span>
                <button onClick={() => setEditingCommentId(comment.id)}>
                  Edit Comment
                </button>
                <button onClick={() => deleteComment(comment.id)}>
                  Delete Comment
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComments;
