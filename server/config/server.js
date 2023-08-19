module.exports = ({ env }) => ({
  proxy: true,
  url: env('HOST_URL','localhost'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});
