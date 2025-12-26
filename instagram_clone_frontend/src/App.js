import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import { usePosts } from "./hooks/usePosts";
import { users } from "./mock/users";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  const user = users[0]; // Mock "current user"

  const {
    posts,
    toggleLike,
    addComment,
    search,
    setSearchQuery,
  } = usePosts();

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App" aria-label="Instagram clone PhotoFeed webapp">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <Header search={search} onSearchChange={setSearchQuery} />
      <Feed
        posts={posts}
        currentUserId={user.id}
        onLike={toggleLike}
        onComment={addComment}
      />
      <footer style={{
        color: "#64748b",
        margin: "2em 0 1em",
        letterSpacing: ".01em",
        fontSize: "1.01em",
        background: "none"
      }}>
        <span>
          &copy; 2024 PhotoFeed. Demo project, not affiliated with Instagram.
        </span>
      </footer>
    </div>
  );
}

export default App;
