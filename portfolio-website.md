# Portfolio Website Plan

## Overview
A developer portfolio website to showcase experience, projects, and skills. The site should have a developer-centric aesthetic — think code-inspired elements, monospace fonts, terminal vibes, clean structure.

## Tech Stack
- **Framework**: Next.js (static export) + Tailwind CSS
- **Goal**: Learn React while building a real portfolio
- **Content Source**: JSON data files (extracted from resume PDF)
- **Resume PDF**: Extract content into JSON + add a downloadable resume link
- **Hosting**: TBD (static export, hosting-agnostic)

## Sections
1. **Hero** — Name, title, short tagline. Developer-themed intro.
2. **About** — Brief bio / background.
3. **Experience** — Work history. Expandable list items (easy to add new entries via JSON).
4. **Projects** — Project showcase. Expandable list items (easy to add new entries via JSON).
5. **Skills** — Categorized tag chips (Languages, Frameworks, Databases, Tools).
6. **Contact** — Social links (GitHub, LinkedIn, etc.) + email.

## Design Direction
- **Theme**: Dark + Minimal
- **Aesthetic**: Developer/engineer-focused — monospace accents, subtle code references, terminal-inspired touches, clean grid layouts. Should feel like a developer built it.
- **Typography**: Mix of clean sans-serif for body + monospace for accents/headings

## Final Design
The selected portfolio uses the card grid + modal direction from Design B as the only site experience.

| Route | Expand Style | Animations |
|-------|-------------|------------|
| `/` | Card grid + modal | Rich particle texture, hover lift, modal focus state |

## Status
1. Resume PDF content extracted into JSON
2. Selected Design B kept as the single implementation
3. Resume download and LinkedIn link wired into the site
