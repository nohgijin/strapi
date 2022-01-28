module.exports = ({ env }) => {
  return {
    connection: {
      client: "mysql",
      connection: {
        host: env("DATABASE_HOST", "cmi.kro.kr"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", process.env.NAME),
        user: env("DATABASE_USERNAME", process.env.USERNAME),
        password: env("DATABASE_PASSWORD", process.env.PASSWORD),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
      options: {
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  };
};
