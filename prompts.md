# AI-Assisted Development Log

This document logs the prompts used and AI assistance received while building this Recipe Finder app, along with manual fixes made after reviewing AI-generated code.

## Development Process

I worked with Claude Web Chat Interface as a step-by-step mentor rather than having it write the whole app at once — I asked for one action at a time, tested each step myself, and only moved forward once I confirmed it worked.

## Key Prompts Used

1. "Give me the very first step to scaffold a React app" — set up the Vite + React project
2. "Add state for search query, results, and loading" — introduced useState hooks
3. "Add a search input wired to state" — built the controlled input
4. "Write a fetch function to call TheMealDB API" — added the async search logic
5. "Wire the button to trigger the search" — connected the click handler
6. "Render the results as cards with images" — built the meals.map() grid
7. "Add a no-results message" — handled the empty state
8. "Add a detail view when a recipe is clicked" — introduced selectedMeal state and conditional rendering
9. "Add styling — dark theme, grid layout, modal overlay" — wrote App.css and wired class names

## Manual Fixes I Made

- **Missing closing brace**: AI-generated code left the `App()` function unclosed before `export default App`, causing a parse error. I identified the error location from the Vite overlay and added the missing `}`.
- **Missing CSS import**: After adding App.css and JSX class names, styles didn't apply — I noticed `import './App.css'` was missing from App.jsx and added it.
- **Modal closing on inner click**: Initially, clicking anywhere inside the recipe detail modal would close it because the click event bubbled up to the overlay. I added `onClick={(e) => e.stopPropagation()}` on the modal content to fix this.
- **UX issue caught early**: On first implementation, the detail view rendered inline at the bottom of the page instead of as an overlay, requiring scrolling to see it. I flagged this and had it rebuilt as a proper modal.

## What AI Assisted With
- Scaffolding boilerplate (Vite config, component structure)
- API integration pattern (fetch, async/await, state updates)
- CSS layout and dark theme styling

## What I Did Manually
- Tested every single step in the browser before proceeding
- Diagnosed and fixed all bugs above by reading error messages and reasoning about the code
- Made git commit decisions and used conventional commit format
- Decided on the app concept, feature scope, and UX priorities