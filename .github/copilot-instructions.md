# Copilot Instructions - Dharmic Pursuit

## Project Overview
"Dharmic Pursuit" is a Next.js 12.2.4 headless CMS website with WordPress backend integration, focusing on spiritual/philosophical content with dynamic blog functionality.

## Architecture & Data Flow

### Headless CMS Pattern
- **WordPress GraphQL API** integration via Apollo Client (`lib/api.js`)
- GraphQL queries centralized in `data/query.js` (QUERY_LATEST_POSTS, GET_POST)
- Static Site Generation (SSG) with fallback blocking for dynamic blog posts
- Dynamic routing: `pages/[uri].js` handles all WordPress post URLs

### Key Integration Points
```javascript
// Apollo Client setup in lib/api.js
export const client = new ApolloClient({
    uri: process.env.WORDPRESS_API_URL,
    cache: new InMemoryCache(),
});

// Dynamic post fetching pattern
export async function getStaticProps({ params }){
    const result = await getSinglePostByURI(params.uri);
    return { props: { post: result?.data?.post } }
}
```

## Development Patterns

### Component Architecture
- **Layout wrapper**: `components/layout.js` provides consistent header/footer structure
- **Modular components**: Each UI section is a separate component (hero.js, blogs.js, etc.)
- **Reusable cards**: `card-blog.js` and `card-tool.js` for consistent content display
- **Custom button component**: `components/button.js` with style variants

### Styling System
- **Tailwind CSS + SASS hybrid**: Primary utility classes with custom SCSS for global styles
- **Custom color palette**: `main` (#5975FF), `second` (#3029D9), `third` (#111849), etc.
- **Responsive-first**: All components use `md:` breakpoints for desktop layouts
- **Font system**: Poppins loaded globally, consistent heading/text patterns

### File Organization
```
pages/           # Next.js routing (index.js, [uri].js for dynamic posts)
components/      # Reusable UI components
lib/            # API utilities and helpers (api.js, datatime.js)
data/           # GraphQL queries and data schemas
styles/         # SCSS variables, mixins, and global styles
```

## Critical Workflows

### Development Commands
```bash
npm run dev     # Development server (port 3000)
npm run build   # Production build
npm run lint    # ESLint checking
```

### Adding New Content Types
1. Define GraphQL query in `data/query.js`
2. Add API function in `lib/api.js`
3. Create/update page in `pages/` directory
4. Use `getStaticProps`/`getStaticPaths` for SSG

### WordPress Integration
- Environment variable: `WORDPRESS_API_URL` for GraphQL endpoint
- Image domains configured in `next.config.js` for WordPress media
- Featured images accessed via `featuredImage.node.sourceUrl` pattern

## Project-Specific Conventions

### Component Props Pattern
```javascript
// Consistent destructuring for components
export default function Blogs({ posts }){
    return posts.map((e, i) => <CardBlog key={i} posts={e} />)
}
```

### Date Formatting
- Use `lib/datatime.js` `formatDate()` function for consistent date display
- Date formatting follows `date-fns` library patterns

### Icon System
- FontAwesome icons loaded globally in `_app.js`
- Both solid (`fas`) and brand (`fab`) icon sets available

### Error Handling
- GraphQL responses use optional chaining: `result?.data?.post`
- Fallback content patterns for missing data (see `checkResult` in blogs.js)

### Image Handling
- Next.js Image component for local assets in `assets/img/`
- Regular `<img>` tags for WordPress-sourced content
- WordPress images allowed via `next.config.js` domains configuration