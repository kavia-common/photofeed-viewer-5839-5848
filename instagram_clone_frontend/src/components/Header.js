import React from "react";
import "./Header.css";

// PUBLIC_INTERFACE
/**
 * Header with branding and search box.
 * @param {Object} props
 * @param {string} props.search
 * @param {(text: string) => void} props.onSearchChange
 */
export default function Header({ search, onSearchChange }) {
  return (
    <header className="header">
      <h1 className="header__brand" tabIndex={0}>PhotoFeed</h1>
      <form
        className="header__search-form"
        role="search"
        onSubmit={e => e.preventDefault()}
      >
        <input
          aria-label="Search posts"
          className="header__search"
          type="text"
          placeholder="Search by caption or username…"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
      </form>
    </header>
  );
}
