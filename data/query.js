import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts {
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