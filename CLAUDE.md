# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
- **Framework**: Astro (Static Site Generator)
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## Development Commands
- `npm run dev`: Start development server
- `npm run build`: Build production site
- `npm run preview`: Preview production build locally

## Code Structure
- Uses Astro for static site generation
- Typescript with strict null checks
- Tailwind CSS for styling
- Uses MDX for content
- Includes integrations for sitemap, RSS, and image optimization

### Directory Organization
- `src/components/`
  - `common/`: Global components (Nav, Footer)
  - `blog/`: Blog-specific components
  - `ui/`: Reusable UI components
- `src/content/`
  - `blog/`: Blog posts
  - `projects/`: Project-related content
- `src/utils/`: Utility functions
- `src/config/`: Global configurations

## Project Dependencies
- Core Frameworks: Astro, Tailwind
- Additional Libraries: 
  - FontAwesome for icons
  - tsparticles for visual effects
  - Sharp for image processing

## TypeScript Configuration
- Extends Astro's strict TypeScript configuration
- Strict null checks enabled
- Excludes `dist` directory from compilation

## Recommended Development Approach
- Follow existing Astro and TypeScript patterns
- Maintain consistent styling with Tailwind
- Leverage Astro's component-based architecture