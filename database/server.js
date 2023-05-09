const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
    user: 'twitty_admin',
    host: 'twitty_app',
    database: 'twitty_db',
    password: 'twitty12345',
    port: 5435,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to database', err.stack);
    } else {
        console.log('Connected to database', res.rows[0].now);
    }
});

app.get('/api/data', (req, res) => {
    pool.query('SELECT * FROM your_table', (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            res.status(500).send('Error executing query');
        } else {
            res.send(result.rows);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});