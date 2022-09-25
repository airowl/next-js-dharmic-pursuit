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
import Quote from '../components/quote';
import Heading from '../components/heading';


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
        {/*<AboutUs />*/}
        <Tools />
        {/*<Quote />*/}
        <Heading light={true}/>
        <Goals />
        <Blogs posts={posts}/>
      
    </Layout>
  )
}

export async function getStaticProps(){

  const result = await getLatestPosts();

  const posts = result?.data?.posts?.nodes.map((node) => node);

  return {
    props: { posts }
  }

}