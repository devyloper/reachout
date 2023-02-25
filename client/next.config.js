const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    HASURA_ADMIN_SECRET:
      'hte7pUltntdU0eyIzgNa4Qy6v4BjDFHorHbpTOSKiTwdXXVBpXfcPNGwUks8pUN4',
  },
});
