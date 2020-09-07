import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostTile from "../components/post-tile"
import BlogStyles from "../styles/blog.module.css"

const BlogPage = ({data}) => (
    <Layout>
        <div className={BlogStyles.container}>
            {data.allMarkdownRemark.edges.map(post =>(
                <PostTile
                  title={post.node.frontmatter.title}
                  author={post.node.frontmatter.author}
                  path={post.node.frontmatter.path}
                  date={post.node.frontmatter.date}
                  id={post.node.frontmatter.id} />
            ))}
        </div>
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery{
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date
              author
              path
            }
          }
        }
      }
    }
`

export default BlogPage
