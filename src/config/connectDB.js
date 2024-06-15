const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '46.4.38.214',
    user: 'professorofweb_tirangagame',
    password: 'professorofweb_tirangagame',
    database: 'professorofweb_tirangagame',
});

export default connection;