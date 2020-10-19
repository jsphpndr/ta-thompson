module.exports = [
  {
    name: 'app',
    deps: [
      'inline/lazyload',
      '~/lazysizes/plugins/rias/ls.rias.min',
      '~/lazysizes/lazysizes.min'
    ],
    files: [
      'components/background',
      'components/nav',
    ]
  },
  {
    name: 'obfuscate',
    files: ['components/obscure']
  },
  // {
  //   name: 'inline',
  //   files: [
  //     'inline/lazyload'
  //   ]
  // },
  {
    name: 'thank-you',

    files: ['components/thank-you']
  },
  {
    name: 'validate',
    
    files: [
      'vendor/bouncer'
    ]
  }
]