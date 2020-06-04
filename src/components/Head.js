import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const Head =  (title) => {
   console.log(title)
   const data = useStaticQuery(graphql`
    query {
       site {
         siteMetadata{
           title
         }
       }
      }
   `)

    return (
      <Helmet title={ `${title.title} | ${data.site.siteMetadata.title}`} />
    )
}

export default Head;