module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: ["genre", "movie", "person"],
    },
  },
});
