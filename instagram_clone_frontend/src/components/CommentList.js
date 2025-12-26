import React from "react";
import "./CommentList.css";

// PUBLIC_INTERFACE
/**
 * Renders a small list of comments under a post.
 * @param {Object} props
 * @param {Array} props.comments
 * @param {Array} props.users
 */
export default function CommentList({ comments, users }) {
  if (!comments || !comments.length) return null;
  return (
    <ul className="comment-list">
      {comments.map(comment => {
        const user = users.find(u => u.id === comment.userId) || {};
        return (
          <li className="comment-list__item" key={comment.id}>
            <img
              src={user.avatarUrl}
              alt={`Avatar of ${user.displayName || user.username || "?"}`}
              className="comment-list__avatar"
              width={27}
              height={27}
            />
            <span className="comment-list__user">
              {user.username || "user"}
            </span>
            <span className="comment-list__text">{comment.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
