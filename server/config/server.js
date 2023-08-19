module.exports = ({ env }) => ({
  proxy: true,
  url: env('HOST_URL','https://kazmiarchitecture-strapi.onrender.com'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});
