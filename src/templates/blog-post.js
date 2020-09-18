import React from 'react';
import Link from 'gatsby-link'
import { graphql } from 'gatsby';
import SEO from "../components/seo"
import BlogPostStyles from "./styles/blog-post.module.css"

import Layout from "../components/layout"

export default function Template({data}){
    const post = data.markdownRemark;

    return(
        <Layout>
            <SEO title={post.frontmatter.title}/>
            <article className={BlogPostStyles.articleBody}>
                <h1 style={{
                    fontSize:`3rem`,
                    padding:`1rem`
                }}>{post.frontmatter.title}</h1>
                <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div className={BlogPostStyles.content} dangerouslySetInnerHTML={{ __html: post.html }}/>
            </article>
            <Link to="/blog" style={{marginLeft:`2rem`}}>Back to Archive</Link>
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