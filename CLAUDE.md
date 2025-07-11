# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio site built with SvelteKit, TypeScript, and Tailwind CSS. It integrates with MicroCMS for blog functionality and uses Skeleton UI for components.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier

## Architecture

### Directory Structure
- `src/routes/` - Page routing following SvelteKit conventions
- `src/lib/` - Shared utilities and content
- `src/lib/microcms.ts` - MicroCMS API client
- `src/components/` - Reusable Svelte components
- `static/` - Static assets

### Key Technologies
- **SvelteKit** - Full-stack web framework with file-based routing
- **MicroCMS** - Headless CMS for blog content
- **Tailwind CSS + Skeleton UI** - Styling framework and component library
- **TypeScript** - Type safety throughout the application

### MicroCMS Integration
- Blog posts are fetched from MicroCMS API
- Images are automatically resized using MicroCMS image processing
- Dynamic routing handles individual blog post pages at `/products/[slug]`

### Important Files
- `src/app.html` - HTML template with Japanese language support
- `src/routes/+layout.svelte` - Root layout with navigation
- `src/lib/microcms.ts` - API client with type definitions for MicroCMS

## Notes

- No test framework is currently configured
- Site is designed for Japanese language (lang="ja")
- Uses Skeleton UI theme with responsive design
- All content should maintain Japanese language support