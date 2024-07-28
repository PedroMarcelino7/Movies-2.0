import mysql from 'mysql';
import dbInfos from './dbInfos';

const connection = mysql.createConnection({
    host: dbInfos.host,
    port: dbInfos.port,
    user: dbInfos.user,
    password: dbInfos.password,
    database: dbInfos.database
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

export { connection };
