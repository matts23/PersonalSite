import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostTile from "../components/post-tile"
import Bio from "../components/bio"
import PageCard from "../components/page-cards"
import ContactForm from "../components/ContactForm"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
      <Bio />
      <PageCard />
      <section style={{
        fontSize: `1.5rem`,
      }}>
        <h2 style={{
          margin: `2rem`,
          textAlign:`center`
        }}>Latest Article</h2>
        <div style={{margin:`5rem auto 5rem auto`}}>
        {data.allMarkdownRemark.edges.map(post =>(
                    <PostTile
                      title={post.node.frontmatter.title}
                      author={post.node.frontmatter.author}
                      path={post.node.frontmatter.path}
                      date={post.node.frontmatter.date}
                      id={post.node.id} />
                ))}
        </div>
       <ContactForm />
      </section>
  </Layout>
)

export const featuredPostQuery = graphql`
    query FeaturedPostQuery{
        allMarkdownRemark(
            limit: 1
            sort: {
                  fields: [frontmatter___date]
                  order: DESC
                }
              ) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  author
                  date
                  path
                }
              }
            }
        }
    }
`
export default IndexPage
