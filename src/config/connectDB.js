const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '46.4.38.214',
    user: 'professorofweb_tiranga',
    password: 'professorofweb_tiranga',
    database: 'professorofweb_tiranga',
});

export default connection;