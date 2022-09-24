import { gql } from "@apollo/client";

export const QUERY_LATEST_POSTS = gql`
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

export const GET_POST = gql`
query GetSinglePostByURI($id: ID!) {
  post(id: $id, idType: URI) {
    uri
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;