import { gql } from "@apollo/client";
import Layout from "../components/layout";
import { client, getSinglePostByURI } from "../lib/api";
import { formatDate } from "../lib/datatime";

export async function getStaticPaths(){
  const paths = []
  return {
    paths,
    fallback:'blocking'
  }
}

export async function getStaticProps({ params }){

  const result = await getSinglePostByURI(params.uri);
  const post = result?.data?.post

  return {
    props: {
      post
    }
  }
}

export default function SlugPage({ post }){
    return (
        <Layout>
            <section className="mt-24 w-screen container mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left my-5">
                {post.title}
              </h2>
              <h3 className="text-base md:text-2xl text-second text-center md:text-left">
                {formatDate(post.date)}
              </h3>
              <div className="flex flex-wrap">
                <div className="md:w-9/12">
                  <img src={post.featuredImage.node.sourceUrl} alt="" />
                  <div dangerouslySetInnerHTML={{__html:post.content}}/>
                </div>
                <div className="md:w-3/12">
                  <p>relative topics</p>
                  <p>ads</p>
                </div>
              </div>
            </section>
        </Layout>
    );
}