const path = require('path');
const TSConfig = require('./tsconfig.json');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'assets', 'images'),
        name: 'images'
      }
    },

    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-plugin-alias-imports', 
      options: {
        alias: Object.entries(TSConfig.compilerOptions.paths).reduce((x, [key, value]) => {
          let k = key.split('/').filter(f => f && f != '*').join('/');
          let v = value.find(v => v).split('/').filter(f => f && f != '*');
          return { ...x, [k]: path.resolve(__dirname, TSConfig.compilerOptions.baseUrl, ...v) };
        }, {})
      }
    },

    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Bitter',
          'Nanum Gothic'
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/main.tsx`),
      },
    }
  ]
}
