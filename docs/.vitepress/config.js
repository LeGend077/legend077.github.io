module.exports = {
    title: 'LeGend077',
    description: 'My Personal Website! @LeGend077 on Github. LeGend#1687 on Discord',
    base: '/',
    themeConfig: {
        nav:[
            {
              text:'Home',
              link: '/'
            },
            {
                text:'Websites',
                link: '/sites'
              },
            {
              text:'Creations',
              link: '/packs'
            },
            {
              text:'About',
              link: '/about'
            },
            {
              text:'Contact',
              link: '/contact'
            },
            {
                text:'Github',
                link: 'https://github.com/LeGend077'
              },
          ],
        algolia: {
          appId: 'GUAQHKBZER',
          apiKey: '6e644c6ccdffe0addfea066fe8cb0566',
          indexName: 'legend-main'
        }
    }
}