# PhotoFeed: Instagram-Clone Frontend

A modern, lightweight React frontend app that mimics the Instagram feed interface—**using only mock data** (no backend).

## Features

- **Instagram-like feed:** Posts stacked vertically, responsive and centered
- **Mock data:** Users, posts, likes & comments in local JSON/arrays (see `src/mock/`)
- **Interactivity:** Like/unlike posts, add comments—instant UI update (in-memory state only)
- **Search:** Top header with "PhotoFeed" branding and a search box to filter posts by caption or username
- **Accessibility:** Semantic HTML, alt text, focus styling, ARIA labels for all interactive elements & forms
- **Theme:** Light modern UI with blue/cyan accents
- **Organized code:** Modular components—see `src/components/`, types in `src/types.js`, hooks in `src/hooks/`
- **No backend or authentication required**

## Running Locally

Run these commands _inside this directory_:

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `src/components/`: Modular UI components (Header, Feed, PostCard, LikeButton, CommentList, CommentForm)
- `src/mock/`: Static mock data—users, posts, comments
- `src/hooks/usePosts.js`: App state & interaction logic for likes/comments/search
- `src/App.js`: App entrypoint (wires it all together)
- Theme defined in `src/App.css`

## Tests

Test support is pre-installed (Jest + React Testing Library). Minimal test stubs only—see `src/App.test.js`.

## Customization & Theming

You can change brand colors by editing CSS variables at the top of `src/App.css`.

## Notes

- All changes (likes/comments) are **in-memory** and reset on reload.
- Demo is for learning and UI showcase.

## License

MIT

