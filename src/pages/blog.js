import React from 'React';
import Layout from '../components/Layout';
import {graphql, useStaticQuery } from 'gatsby';


const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
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
                            <h2>
                             {edge.node.frontmatter.title}
                            </h2>
                            <p>
                                {edge.node.frontmatter.date}
                            </p>

                        </li>
                    )
                })}
            </ol>
        </div>
        </Layout>
    )
}

export default BlogPage;