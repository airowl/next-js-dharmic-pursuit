# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Dharmic Pursuit" is a Next.js-based website featuring a headless CMS architecture with WordPress backend integration. The site serves as a content platform focused on spiritual/philosophical content with dynamic blog functionality, tools showcase, and informational pages.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Tech Stack

### Core Framework
- **Next.js 12.2.4** with React 18.2.0
- **Static Site Generation (SSG)** for blog content
- **File-based routing** in `pages/` directory

### Data Layer
- **WordPress headless CMS** integration via GraphQL
- **Apollo Client 3.6.9** for GraphQL state management
- API functions centralized in `lib/api.js`
- GraphQL queries defined in `data/query.js`

### Styling System
- **Tailwind CSS 3.1.8** for utility classes
- **SASS** for custom global styles
- **CSS Modules** for component-specific styling
- Custom color scheme: main (#5975FF), second (#3029D9), third (#111849)

### Key Components
- `components/layout.js` - Main layout wrapper with header/footer
- `pages/[uri].js` - Dynamic routing for WordPress blog posts
- `pages/_app.js` - Apollo Provider and global configurations

## File Structure Patterns

```
pages/          # Next.js pages (file-based routing)
├── index.js    # Homepage with getStaticProps
├── [uri].js    # Dynamic blog post pages
├── _app.js     # Global providers and configurations
└── api/        # API routes

components/     # Reusable UI components
lib/           # API utilities and helper functions
data/          # GraphQL queries and schemas
styles/        # SCSS files and CSS modules
```

## Code Conventions

### Naming
- **Files**: kebab-case (`card-blog.js`, `about-us.js`)
- **Components**: PascalCase exports (`export default function Layout`)
- **Functions**: camelCase (`getLatestPosts`)

### Import Order
```javascript
// 1. Next.js imports
import Head from 'next/head';
import Image from 'next/image';

// 2. External libraries
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// 3. Internal imports
import Layout from '../components/layout';
import { getLatestPosts } from '../lib/api';
```

### Component Pattern
```javascript
export default function ComponentName({ props }) {
    return (
        <Layout>
            {/* Component content */}
        </Layout>
    );
}

// For pages with data fetching
export async function getStaticProps() {
    const data = await getLatestPosts();
    return { props: { data } };
}
```

## WordPress Integration

### GraphQL Queries
- Defined in `data/query.js` using `gql` template literals
- `QUERY_LATEST_POSTS` - Fetches recent blog posts
- `GET_POST` - Fetches single post by URI

### API Configuration
- WordPress API URL configured via `WORDPRESS_API_URL` environment variable
- Apollo Client setup in `lib/api.js`
- Image domains configured in `next.config.js` for WordPress images

## Development Workflow

### Before Completing Tasks
1. Run `npm run lint` to fix ESLint issues
2. Run `npm run build` to ensure production build works
3. Test locally with `npm run dev`
4. Verify WordPress integration if modifying blog functionality

### Common Tasks
- **Adding new pages**: Create in `pages/` directory following existing patterns
- **New components**: Add to `components/` with kebab-case naming
- **Styling**: Use Tailwind utilities first, CSS modules for custom styles
- **WordPress queries**: Add to `data/query.js` and corresponding API functions in `lib/api.js`

## Environment Requirements

- Node.js environment
- WordPress backend with GraphQL API
- Environment variable: `WORDPRESS_API_URL` for backend connection