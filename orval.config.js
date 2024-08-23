module.exports = {
  backend: {
    input: {
      target: './swaggers/backend/swagger.json',
    },
    output: {
      mode: 'split',
      client: 'react-query',
      prettier: true,
      clean: true,
      target: './src/api/backend/index.ts',
      override: {
        mutator: {
          path: './src/api/utils/backendRequest.ts',
          name: 'backendRequest',
        },
      },
    },
  },
};
