#### Architecture & Technology Stack
This Next.js headless CMS platform showcases modern JAMstack architecture using cutting-edge web technologies:

- **Frontend Framework**: Next.js 12.2.4 with React 18.2.0 for optimal performance and SEO
- **Content Management**: WordPress headless CMS integration via GraphQL API
- **Data Layer**: Apollo Client 3.6.9 for efficient GraphQL state management and caching
- **Styling System**: Tailwind CSS 3.1.8 + SASS for utility-first design with custom components
- **Generation Strategy**: Static Site Generation (SSG) with incremental regeneration for blog content
- **Routing**: File-based routing with dynamic blog post generation

#### Key Features
- **Headless CMS Architecture**: Complete separation of content management and presentation layer
- **GraphQL Integration**: Centralized data fetching with Apollo Client for optimal performance
- **Dynamic Blog System**: WordPress posts automatically generated as static pages with fallback
- **Responsive Design**: Mobile-first approach with custom color scheme and typography
- **SEO Optimized**: Built-in Next.js SEO features with dynamic meta tags from WordPress
- **Production Ready**: Optimized build process with static generation and CDN-friendly assets

#### Technical Implementation
1. **Content Layer** (`lib/api.js`) provides GraphQL queries to WordPress backend
2. **Data Queries** (`data/query.js`) centralizes all GraphQL operations (QUERY_LATEST_POSTS, GET_POST)
3. **Dynamic Routing** (`pages/[uri].js`) handles all WordPress post URLs with SSG
4. **Component Architecture**: Modular layout system with reusable components for blogs, tools, and content cards
5. **Build Pipeline**: Next.js optimization with image handling and WordPress domain integration

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 14+ 
- npm or yarn
- WordPress installation with GraphQL API enabled
- WordPress GraphQL plugin installed

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dharmic-pursuit.git
   cd dharmic-pursuit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   ```bash
   # Create .env.local file
   WORDPRESS_API_URL=https://your-wordpress-site.com/graphql
   ```

4. **Start development server**
   ```bash
   npm run dev
   # Navigate to http://localhost:3000
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint checking
```

---

## 🗂️ Project Structure

```
/
├── pages/
│   ├── index.js           # Homepage with blog posts
│   ├── [uri].js          # Dynamic WordPress post pages
│   ├── _app.js           # Apollo Provider & global config
│   └── api/              # API routes
├── components/
│   ├── layout.js         # Main layout wrapper
│   ├── hero.js           # Hero section component
│   ├── blogs.js          # Blog listing component
│   ├── card-blog.js      # Individual blog post card
│   └── button.js         # Reusable button component
├── lib/
│   ├── api.js            # GraphQL API functions
│   └── datetime.js       # Date formatting utilities
├── data/
│   └── query.js          # GraphQL queries
├── styles/
│   ├── globals.scss      # Global SASS styles
│   └── variables.scss    # CSS custom properties
└── assets/
    └── img/              # Static images
```

---

## 💡 Usage Examples

### Fetching Blog Posts
```javascript
// In pages/index.js
import { getLatestPosts } from '../lib/api';

export async function getStaticProps() {
  const posts = await getLatestPosts();
  return {
    props: { posts },
    revalidate: 60, // Regenerate every minute
  };
}

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Blogs posts={posts} />
    </Layout>
  );
}
```

### Creating Dynamic Blog Pages
```javascript
// In pages/[uri].js
import { getSinglePostByURI, getAllPostsURI } from '../lib/api';

export async function getStaticPaths() {
  const posts = await getAllPostsURI();
  const paths = posts.map(post => ({ params: { uri: post.uri } }));
  
  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const result = await getSinglePostByURI(params.uri);
  
  if (!result?.data?.post) {
    return { notFound: true };
  }

  return {
    props: { post: result.data.post },
    revalidate: 3600, // Regenerate every hour
  };
}
```

### GraphQL Query Example
```javascript
// In data/query.js
import { gql } from "@apollo/client";

export const QUERY_LATEST_POSTS = gql`
  query LatestPosts($first: Int) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        excerpt
        slug
        uri
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
```

---

## 🔧 Configuration

### Next.js Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['your-wordpress-domain.com'], // WordPress image domain
  },
  trailingSlash: true,
  reactStrictMode: true,
}
```

### WordPress GraphQL Setup
1. Install WordPress GraphQL plugin
2. Enable GraphQL endpoint at `/graphql`
3. Configure CORS settings for your domain
4. Set up featured images and excerpt support
5. Configure permalink structure for clean URLs

### Styling Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#5975FF',
        second: '#3029D9',
        third: '#111849',
      },
    },
  },
}
```

---

## 🎨 Styling System

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **SASS**: Custom global styles and variables
- **CSS Modules**: Component-specific styling when needed
- **Custom Color Palette**: Brand-consistent color scheme
- **Responsive Design**: Mobile-first approach with breakpoint system

Common utility patterns:
- `text-main`, `text-second`, `text-third` - Brand colors
- `md:text-lg`, `md:space-y-4` - Responsive modifiers
- `container`, `mx-auto`, `px-4` - Layout containers

---

## 📱 Features

- ✅ WordPress headless CMS integration
- ✅ Dynamic blog post generation with SSG
- ✅ GraphQL data fetching with Apollo Client
- ✅ Responsive design with Tailwind CSS
- ✅ SEO optimized with Next.js built-ins
- ✅ Image optimization for WordPress media
- ✅ Tools showcase section
- ✅ Custom component library
- ✅ Production-ready build process
- ✅ Static site generation with fallback

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Static Export (Optional)
```bash
npm run build
npm run export
```

### Environment Variables
Ensure your production environment has:
- `WORDPRESS_API_URL`: Your WordPress GraphQL endpoint URL

### Recommended Hosting Platforms
- **Vercel**: Optimal for Next.js applications (automatic deployments)
- **Netlify**: Great for static sites with form handling
- **AWS Amplify**: Enterprise-grade hosting with CI/CD
- **DigitalOcean App Platform**: Cost-effective with good performance

---

## 🔄 Content Management Workflow

1. **Create Content**: Write and publish posts in WordPress admin
2. **Automatic Sync**: GraphQL queries fetch latest content on build/revalidation
3. **Static Generation**: Next.js generates optimized static pages
4. **Incremental Updates**: ISR (Incremental Static Regeneration) updates content automatically
5. **CDN Distribution**: Static assets distributed globally for fast loading

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the established patterns
4. Run linting: `npm run lint`
5. Test the build: `npm run build`
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Guidelines
- Follow existing naming conventions (kebab-case for files, PascalCase for components)
- Use Tailwind utilities first, custom SASS for complex styling
- Add GraphQL queries to `data/query.js` and API functions to `lib/api.js`
- Ensure responsive design across all screen sizes
- Test WordPress integration locally before submitting

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- **Issues**: Please use the GitHub issues tab for bug reports and feature requests
- **Documentation**: Check out the [Next.js docs](https://nextjs.org/docs) and [WordPress GraphQL documentation](https://www.wpgraphql.com/)
- **Community**: Join the Next.js and WordPress developer communities for additional support

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing React framework
- [WordPress](https://wordpress.org) and [WPGraphQL](https://www.wpgraphql.com/) for the headless CMS capabilities
- [Apollo GraphQL](https://www.apollographql.com/) for the excellent GraphQL client
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- The open-source community for continuous inspiration and support

---

**Made with 🙏  Next.js and WordPress**