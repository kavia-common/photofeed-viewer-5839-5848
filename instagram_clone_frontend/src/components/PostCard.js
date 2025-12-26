import React, { useRef } from "react";
import LikeButton from "./LikeButton";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { users } from "../mock/users";
import "./PostCard.css";

// PUBLIC_INTERFACE
/**
 * Instagram-style post card.
 * @param {Object} props
 * @param {any} props.post
 * @param {string} props.currentUserId
 * @param {(postId: string, uid: string) => void} props.onLike
 * @param {(postId: string, uid: string, text: string) => void} props.onComment
 */
export default function PostCard({
  post,
  currentUserId,
  onLike,
  onComment
}) {
  const user = post.user || users.find(u => u.id === post.userId);
  const commentInputRef = useRef();

  function handleLike() {
    onLike(post.id, currentUserId);
  }
  function handleComment(text) {
    onComment(post.id, currentUserId, text);
    if (commentInputRef.current) commentInputRef.current.value = "";
  }
  function formatTime(ts) {
    return new Date(ts).toLocaleString([], {
      dateStyle: "medium",
      timeStyle: "short"
    });
  }

  // Show last 2-4 comments
  const shownComments =
    post.comments && post.comments.length > 4
      ? post.comments.slice(-4)
      : post.comments || [];

  return (
    <article className="post-card">
      <header className="post-card__header">
        <img
          src={user.avatarUrl}
          alt={`Avatar for ${user.displayName}`}
          className="post-card__avatar"
          width={42}
          height={42}
        />
        <span className="post-card__user">{user.displayName}</span>
        <span className="post-card__username">@{user.username}</span>
      </header>
      <div className="post-card__imgbox">
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="post-card__img"
        />
      </div>
      <div className="post-card__body">
        <LikeButton
          liked={post.likes.includes(currentUserId)}
          count={post.likes.length}
          onClick={handleLike}
        />
        <div className="post-card__caption">
          <span className="post-card__user-short">{user.username}</span>{" "}
          {post.caption}
        </div>
        <CommentList
          comments={shownComments}
          users={users}
        />
        <CommentForm
          onSubmit={handleComment}
          inputRef={commentInputRef}
          ariaLabel={`Add comment to ${user.username}'s post`}
        />
        <span className="post-card__timestamp">
          {formatTime(post.createdAt)}
        </span>
      </div>
    </article>
  );
}
