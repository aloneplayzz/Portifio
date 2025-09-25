# Overview

This is a full-stack portfolio web application built with React, TypeScript, and Express.js. The application showcases a developer's portfolio with sections for profile information, tech stack, work process, services offered, and contact details. It features a modern dark theme with animated code background effects and responsive design using Tailwind CSS and shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built as a Single Page Application (SPA) using React with TypeScript:
- **Component Structure**: Uses functional components with React hooks for state management
- **Styling System**: Tailwind CSS with custom CSS variables for theming, implementing a dark theme with neutral base colors
- **UI Components**: shadcn/ui component library providing consistent, accessible components built on Radix UI primitives
- **Routing**: Wouter for client-side routing with simple route definitions
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Build System**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a minimal Express.js structure:
- **Framework**: Express.js with TypeScript for type safety
- **Architecture Pattern**: Simple layered architecture with routes, storage interface, and middleware
- **Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation for development
- **Development Setup**: Vite middleware integration for hot module replacement during development
- **API Design**: RESTful API structure with `/api` prefix for all endpoints

## Database Architecture
The application is configured for PostgreSQL with Drizzle ORM:
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema Definition**: Centralized schema definitions in `shared/schema.ts` with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema synchronization
- **Type Safety**: Full type safety from database to frontend using shared TypeScript types

## Development Tooling
- **TypeScript Configuration**: Strict TypeScript settings with path aliases for clean imports
- **Code Quality**: ESM modules throughout the stack for modern JavaScript features
- **Development Experience**: Hot reload, error overlays, and development banners for enhanced DX
- **Build Process**: Unified build system that handles both frontend and backend compilation

## Deployment Architecture
The application is designed for single-server deployment:
- **Static Assets**: Frontend assets served from Express server in production
- **Server Rendering**: Express serves the SPA with proper routing fallback
- **Environment Configuration**: Environment-based configuration for database connections and API endpoints

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18 with React DOM, React Hook Form for form handling
- **Backend Framework**: Express.js with TypeScript support
- **Build Tools**: Vite for frontend bundling, esbuild for backend compilation

## Database and ORM
- **Database**: PostgreSQL (configured for Neon Database via `@neondatabase/serverless`)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type validation and schema validation

## UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Font Awesome for icons, Lucide React for additional iconography
- **Animations**: Custom CSS animations with Tailwind transitions

## Development and Quality Tools
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development Experience**: Replit-specific plugins for enhanced development in Replit environment
- **Session Management**: Express sessions with PostgreSQL session store (`connect-pg-simple`)

## Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and class-variance-authority for conditional CSS classes
- **Query Management**: TanStack React Query for efficient server state management
- **Carousel**: Embla Carousel for interactive carousel components