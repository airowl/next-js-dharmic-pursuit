import Layout from "../components/layout";
import {getLatestPosts} from '../lib/api';


export async function getStaticProps(){

    const latestPosts = await getLatestPosts();
    //const latestPosts = JSON.stringify(result);
    console.log(latestPosts);

    if (!latestPosts) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
            latestPosts,
        }
    }
}

export default function Blogs({latestPosts}){
    return (
        <Layout>
            <section>
                Sono Blogs
                {
                    console.log(latestPosts)
                }
            </section>
        </Layout>
    );
}