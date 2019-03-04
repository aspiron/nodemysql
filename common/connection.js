const mysql = require('mysql')
const util  = require('util')

const connection = mysql.createConnection({
    host           : 'localhost',
    user           : 'root',
    password       : '1234',
    database       : 'mysqlnode',
    databaseString : 'date'  
})

connection.config.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
  };

connection.query = util.promisify(connection.query);

module.exports = connection;


