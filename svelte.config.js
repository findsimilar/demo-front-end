import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const adapter_options = {
  pages: 'demo-front-end',
  assets: 'demo-front-end',
}
const config = {
  kit: {
    adapter: adapter(adapter_options),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
      //base: '/demo-front-end'
    }
  }
};

export default config;
