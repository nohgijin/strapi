module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb1e4b7c7f0555defce68efb88aefe77'),
  },
});
