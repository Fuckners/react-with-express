import express from 'express';
import database from './database/database';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        // const response = await database.insert({ name: 'Far Cry V', price: 120.00, category: 'ação' }).table('games');


        // res.json(response);
        res.send('estou aqui!');
    } catch (error) {
        console.log(error);
    }
});

app.get('/games', (req, res) => {
    res.json({ games: ['lol', 'dota', 'gta', 'guitar hero', 'rdr'] });
})

// app.post('/teste', (req, res) => {
//     console.log(JSON.stringify(req.body));
//     res.redirect('/')
// })

const port = 8080
app.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}`))