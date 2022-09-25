import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { 
    QUERY_LATEST_POSTS,
    GET_POST
} from '../data/query';

const API_URL = process.env.WORDPRESS_API_URL;

export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});

export async function getLatestPosts() {

    const response = await client.query({
        query: QUERY_LATEST_POSTS,
    });

    return response;

}

export async function getSinglePostByURI(uri){

    const response = await client.query({
        query: GET_POST,
        variables: {
            id: uri,
        }
    });

    return response;

}