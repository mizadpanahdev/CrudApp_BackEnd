import pg from 'pg';
const {Pool}= pg;
// local config for connecting to db:
let localPoolConfig={
    user: 'postgres',
    password: '8411311008',
    host: 'localhost',
    port: '5432',
    database:'hamraz'
};
// dev env config for connecting db:
// const poolconfig= env.DATABASE_URL ? {
//     connectionString: process.env.DATABASE_URL,
//     ssl:{ rejectUnautorized:false }
// } : localPoolConfig;

const pool = new Pool(localPoolConfig);
export default pool;
