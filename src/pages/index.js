import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Gatsby Blog Template</h1>
    <div>
        <Link to="/">Home</Link>
        <h1>Latest Post</h1>
        {data.allMarkdownRemark.edges.map(post =>(
            <div key={post.node.id}>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery{
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___date]
          order: ASC
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

export default IndexPage
