import React, { useState } from "react";
import "./CommentForm.css";

// PUBLIC_INTERFACE
/**
 * Form to add a comment under a post.
 * @param {Object} props
 * @param {(text:string)=>void} props.onSubmit
 * @param {React.RefObject} [props.inputRef]
 * @param {string} [props.ariaLabel]
 */
export default function CommentForm({ onSubmit, inputRef, ariaLabel }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text.trim());
      setText("");
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="comment-form__input"
        aria-label={ariaLabel || "Add a comment"}
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="comment-form__btn"
        type="submit"
        aria-label="Submit comment"
        disabled={!text.trim()}
      >
        Post
      </button>
    </form>
  );
}
