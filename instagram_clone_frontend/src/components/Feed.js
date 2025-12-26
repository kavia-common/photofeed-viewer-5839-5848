import React from "react";
import PostCard from "./PostCard";
import "./Feed.css";

// PUBLIC_INTERFACE
/**
 * Feed of posts (central content area)
 * @param {{posts: any[], currentUserId: string, onLike: function, onComment: function}} props
 */
export default function Feed({ posts, currentUserId, onLike, onComment }) {
  return (
    <main className="feed">
      {posts.length === 0 ? (
        <div className="feed__empty">No posts found.</div>
      ) : (
        posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            currentUserId={currentUserId}
            onLike={onLike}
            onComment={onComment}
          />
        ))
      )}
    </main>
  );
}
