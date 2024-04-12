import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://5cb0-2405-201-680b-f1f3-25e1-4f9f-deb2-bc4d.ngrok-free.app/graphql',
  documents: ['src/**/*.{ts,tsx,js,jsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
