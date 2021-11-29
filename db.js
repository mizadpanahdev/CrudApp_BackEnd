const Pool = require("pg").pool;

const pool = new Pool(
    {
user: "postgres",
host: "localhost",
database: "person",
password: "f32r94q9wc849yb",
port: 5432,
    }
);

module.exports = pool;
 