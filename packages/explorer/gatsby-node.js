const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: `${value}`,
    });
    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title,
    });
    createNodeField({
      name: 'icon',
      node,
      value: node.frontmatter.icon || 'bat_exec',
    });
    createNodeField({
      name: 'tags',
      node,
      value: node.frontmatter.tags || [],
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query from gatsby-node.js',
    );
  }
  const posts = result.data.allMdx.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/components.jsx`),
      context: { id: node.id },
    });
  });
};
