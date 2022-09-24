import { ApolloClient, InMemoryCache } from "@apollo/client";
//import { 
//    QUERY_ALL_POSTS,
//    QUERY_LATEST_POSTS,
//} from '../data/query';

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

export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});

export async function getLatestPosts() {

    const response = await client.query({
        query: QUERY_ALL_POSTS,
    });

    const posts = response?.data?.posts?.nodes.map((node) => node);

    return posts;

}
