module.exports = [
  {
    name: 'snippets',

    files: [
      'snippets/background',
      'snippets/lazyload',
      'snippets/nav',
    ] 
  },
  {
    name: 'reading-time',
    
    files: [
      'components/readingtime'
    ]
  },
  {
    name: 'obscure',
    files: ['components/obscure']
  },
  {
    name: 'lite-youtube',
    files: ['third-party/lite-youtube']
    // deps: [
    //   '~/@justinribeiro/lite-youtube/lite-youtube.min',
    // ]
  },
  {
    name: 'map',
    files: [ 'components/map' ]
  },
  {
    name: 'lazysizes',
    
    deps: [
      '~/lazysizes/plugins/rias/ls.rias.min',
      '~/lazysizes/lazysizes.min'
    ]
  },
  {
    name: 'thank-you',

    files: ['components/thank-you']
  },
  {
    name: 'app',

    files: [
      'components/navScroll',
      'components/copyLink'
    ]
  },
  {
    name: 'validate',
    
    files: [
      'third-party/bouncer'
    ]
  }
]