import React from "react";
import "./LikeButton.css";

// PUBLIC_INTERFACE
/** Like/unlike post button
 * @param {Object} props
 * @param {boolean} props.liked
 * @param {number} props.count
 * @param {() => void} props.onClick
 */
export default function LikeButton({ liked, count, onClick }) {
  return (
    <button
      className={`like-btn${liked ? " liked" : ""}`}
      onClick={onClick}
      aria-pressed={liked}
      aria-label={liked ? "Unlike post" : "Like post"}
      tabIndex={0}
    >
      <span className="like-btn__icon" aria-hidden="true">
        {liked ? "❤️" : "🤍"}
      </span>
      <span className="like-btn__count">{count}</span>
    </button>
  );
}
