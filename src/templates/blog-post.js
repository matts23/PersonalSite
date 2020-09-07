import React from 'react';
import Link from 'gatsby-link'
import { graphql } from 'gatsby';

import Layout from "../components/layout"

export default function Template({data}){
    const post = data.markdownRemark;

    return(
        <Layout>
            <Link to="/blog">Back to Archive</Link>
            <article style={{
                minHeight: `100vh`,
                maxWidth:`700px`,
                margin: `auto`,
                textAlign: `center`
            }}>
                <h1 style={{
                    fontSize:`3rem`,
                    padding:`1rem`
                }}>{post.frontmatter.title}</h1>
                <h4 style={{
                    fontSize:`1.5rem`,
                    padding:`1rem`,
                    marginBottom:`3rem`
                }}>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div style={{
                    lineHeight:`2rem`,
                    fontSize:`1.2rem`,
                    textAlign:`left`,
                    padding:`1rem`
                }} dangerouslySetInnerHTML={{__html: post.html}}/>
            </article>
        </Layout>
    )
}

export const postQuery = graphql`
query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path } }){
        html
        frontmatter{
            path
            title
            author
            date
        }
    }
}
`