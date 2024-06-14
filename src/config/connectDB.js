const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'tirangaofhasibul8w37',
    password: 'LLbZ2YPp3E7DbpEZ',
    database: 'tirangaofhasibul8w37',
});

export default connection;