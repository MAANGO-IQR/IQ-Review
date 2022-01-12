const { Pool } = require("pg");

const PG_URI =
  "postgres://hbqjkqmg:cLyVwKIJOpcymJNMMp8veyw5NUUm4N2k@castor.db.elephantsql.com/hbqjkqmg";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: function (queryString, params, callback) {
    console.log(`Executed query: ${queryString}`);
    return pool.query(queryString, params, callback);
  },
};