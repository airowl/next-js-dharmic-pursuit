import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import AboutUs from '../components/about-us';
import Tools from '../components/tools';
import Goals from '../components/goals';
import Blogs from '../components/blogs';
import { getLatestPosts } from '../lib/api';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export const siteTitle = "Dharmic Pursuit";

export default function Home({ posts }) {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero />
        <AboutUs />
        <Tools />
        <Goals />
        <Blogs posts={posts}/>
      
    </Layout>
  )
}

export async function getStaticProps(){

  //const result = await getLatestPosts();
  const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts(last: 3) {
      nodes {
          title
          date
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
      }
      }
  }
`;

const API_URL = process.env.WORDPRESS_API_URL;


  const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });

const response = await client.query({
  query: QUERY_ALL_POSTS,
});

const posts = response?.data?.posts?.nodes.map((node) => node);

  return {
    props: { posts }
  }

}