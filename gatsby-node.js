const path = require(`path`)
// const { default: ProductPage } = require("./src/templates/ProductPage")
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductPage = path.resolve(`src/templates/ProductPage.js`)
  const result = await graphql(`
    {
      allContentfulAccessories {
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  result.data.allContentfulAccessories.edges.forEach(edge => {
    createPage({
      path: `${edge.node.id}`,
      component: ProductPage,
      context: {
        id: edge.node.id,
      },
    })
  })
}
