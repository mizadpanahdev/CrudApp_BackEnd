const Pool = require("pg").Pool;

const pool = new Pool(
    {
user: "postgres",
host: "localhost",
database: "person",
password: "8411311008",
port: 5432,
    }
);

module.exports = pool;
