//const API_URL = process.env.WORDPRESS_API_URL;

//async function fetchAPI(query, { variables } = {}){
//    const headers = { 'Content-Type': 'application/json' };

//    if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN){
//        headers[
//            'Authorization'
//        ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
//    };

//    const res = await fetch(API_URL, {
//        headers,
//        method: 'POST',
//        body: JSON.stringify({
//            query,
//            variables,
//        }),
//    });

//    const json = await res.json();

//    if(json.errors){
//        console.error(json.errors);
//        throw new Error('Failer to fetch API');
//    }
//    return json.data;
//}

//export async function getPosts(query){
//    const data = await fetchAPI(
//        query,
//        {
//            variables: {},
//        }
//    );
//    return data?.posts?.edges;
//}

import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL = process.env.WORDPRESS_API_URL;

export const client = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
});
