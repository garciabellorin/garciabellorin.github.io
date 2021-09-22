const db = require('./db_connection');
var mysql = require('mysql');

const getWord = (word) => {
    console.log('I was here');
    var sql = `SELECT * FROM entries WHERE word = ${mysql.escape(word)}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

module.exports = getWord;
