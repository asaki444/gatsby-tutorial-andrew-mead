const path = require('path')

exports.onCreateNode = ({
    node,
    actions
}) => {
    const {
        createNode,
        createNodeField
    } = actions
    // Transform the new node here and create a new node or


    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })  
    }

}