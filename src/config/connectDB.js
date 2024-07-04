const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '46.4.38.214',
    user: 'eazyurlx_tiranga',
    password: 'eazyurlx_tiranga',
    database: 'eazyurlx_tiranga',
});

export default connection;