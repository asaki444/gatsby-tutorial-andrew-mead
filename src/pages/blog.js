import React from 'React';
import Layout from '../components/Layout';
import {graphql, useStaticQuery, Link } from 'gatsby';


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                  slug
              }
              frontmatter {
                date
                title
              }
            }
          }
        }
      }`)


    return(
        <Layout>
        <div>
       

            <h1>
             Blog
            </h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>
                          <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>
                             {edge.node.frontmatter.title}
                            </h2>
                            <p>
                                {edge.node.frontmatter.date}
                            </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </div>
        </Layout>
    )
}

export default BlogPage;