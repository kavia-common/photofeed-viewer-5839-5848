import { useState } from "react";
import { posts as postsData } from "../mock/posts";
import { users } from "../mock/users";
import { comments as commentsData } from "../mock/comments";

// PUBLIC_INTERFACE
/**
 * Custom hook for managing posts, likes, and comments state.
 */
export function usePosts() {
  const [posts, setPosts] = useState(postsData.map(post => ({
    ...post,
    user: users.find(u => u.id === post.userId),
    comments: commentsData.filter(c => c.postId === post.id)
  })));
  const [search, setSearch] = useState("");

  // PUBLIC_INTERFACE
  function toggleLike(postId, userId) {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes.includes(userId)
                ? post.likes.filter(uid => uid !== userId)
                : [...post.likes, userId]
            }
          : post
      )
    );
  }

  // PUBLIC_INTERFACE
  function addComment(postId, userId, text) {
    const newComment = {
      id: Math.random().toString(36).slice(2),
      postId,
      userId,
      text,
      createdAt: new Date().toISOString(),
    };
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  }

  // PUBLIC_INTERFACE
  function setSearchQuery(val) {
    setSearch(val);
  }

  // PUBLIC_INTERFACE
  function getFilteredPosts() {
    if (!search.trim()) return posts;
    const lower = search.toLowerCase();
    return posts.filter(post =>
      post.caption.toLowerCase().includes(lower) ||
      post.user.username.toLowerCase().includes(lower)
    );
  }

  return {
    posts: getFilteredPosts(),
    allPosts: posts,
    toggleLike,
    addComment,
    search,
    setSearchQuery,
  };
}
