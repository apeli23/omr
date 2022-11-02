const siteMetadata = {
  title: 'Omari',
  author: 'Omari Derrick',
  headerTitle: 'somedericktek',
  description: 'Tech Content Creation',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://dalelarroder.com',
  siteRepo: 'https://github.com/derrickomari',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'derrick99omari@gmail.com',
  github: 'https://github.com/derrickomari',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/',
  spotify: 'https://open.spotify.com/',
  steam: 'https://steamcommunity.com/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
