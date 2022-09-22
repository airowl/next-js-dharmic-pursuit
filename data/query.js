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