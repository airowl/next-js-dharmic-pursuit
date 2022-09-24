import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
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