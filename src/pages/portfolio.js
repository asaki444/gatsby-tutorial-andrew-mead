import React from 'React';
import Layout from '../components/Layout';
import {graphql, useStaticQuery, Link } from 'gatsby';

import blogStyles from './blog.module.scss';

const BlogPage = () => {

 const data = useStaticQuery(graphql`
      query{
      allContentfulBlogPost( sort:{
        fields: publishedDate,
        order: DESC
      }){
        edges{
          node{
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
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
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge)=>{
                    return(
                        <li className={blogStyles.post}>
                          <Link to={`/blog/${edge.node.slug}`}>
                            <h2>
                             {edge.node.title}
                            </h2>
                            <p>
                                {edge.node.publishedDate}
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