module.exports.onCreateNode(({node, actions}) => {
    const {create, createNodeField} = actions;

    console.log(node);
    console.log(JSON.stringify(node,undefined, 4))
})