import express from 'express';
import cors from 'cors';
import { connection } from './db.js';

const app = express();
const SECRET_KEY = 'logged';

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.get('/users', (req, res) => {
    const query = `
        SELECT * FROM USERS
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).send(err);
        }

        res.json(results);
    });
});

app.post('/users', (req, res) => {
    const { userEmail, userPassword } = req.body;

    if (!userEmail || !userPassword) {
        return res.status(400).json({ error: 'userEmail and userPassword are required' });
    }

    const query = `
        INSERT INTO USERS (USER_EMAIL, USER_PASSWORD)
        VALUES (?, ?)
    `;

    const values = [userEmail, userPassword];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).send(err);
        }

        res.status(201).json(results);
    });
});

app.get('/movies', (req, res) => {
    const query = `
        SELECT * FROM MOVIES
    `;

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching movies:", err);
            return res.status(500).send(err);
        }

        res.json(results);
    });
});

app.post('/movies/reviews', (req, res) => {
    const { movieTitle } = req.body;

    if (!movieTitle) {
        return res.status(400).json({ error: 'movieTitle is required' });
    }

    const query = `
        INSERT INTO MOVIES (MOVIE_TITLE, MOVIE_DATE, MOVIE_IMG, MOVIE_RATING, MOVIE_REVIEW)
        VALUES (?, '2024-07-29', 'aaaaaaaaa', 5, 'Review')
    `;

    const values = [movieTitle];

    connection.query(query, values, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.status(201).json(results);
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
