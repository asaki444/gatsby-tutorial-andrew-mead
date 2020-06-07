const path = require('path')


exports.createPages = async ({graphql, actions}) => {
    const{ createPage } = actions;
    const projectTemplate = path.resolve('./src/templates/project.js')
    const res = await graphql(`query {
        allContentfulBlogPost {
          edges {
            node{
                slug
            }
          }
        }
      }   
    `
    )

    res.data.allContentfulBlogPost.edges.forEach((edge)=>{
        createPage({
            component: projectTemplate,
            path: `/portfolio/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })



}