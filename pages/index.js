import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Hero from '../components/hero';
import AboutUs from '../components/about-us';
import Tools from '../components/tools';
import Goals from '../components/goals';
import Blogs from '../components/blogs';
import { client } from '../lib/api';
import { gql } from "@apollo/client";


export async function getStaticProps(){

  const GET_POSTS = gql`
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

  const response = await client.query({
      query: GET_POSTS
  })
  const posts = response?.data?.posts?.nodes
  console.log('ready');
  return {
      props: {
          posts
      }
  }
}


export const siteTitle = "Dharmic Pursuit";

export default function Home({ posts }) {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        </Head>

        <Hero />
        <AboutUs />
        <Tools />
        <Goals />
        <Blogs posts={posts}/>
      
    </Layout>
  )
}
