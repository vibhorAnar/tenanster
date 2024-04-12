module.exports = {
  client: {
    service: {
      name: 'tenanster',
      url: 'https://82c1-2405-201-680b-f1f3-1c55-bb08-9f01-3f25.ngrok-free.app/graphql',
    },
    includes: ['./src/**/*.ts', './src/**/*.js'],
    excludes: ['**/__tests__/**'],
  },
};
