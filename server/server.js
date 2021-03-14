const express = require('express');
require('dotenv').config()

var db = require('knex')({
    client: 'pg',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
});
// Controllers - aka, the db queries
const main = require('./controllers/main');

const app = express();
//Express Middleware
const helmet = require('helmet')           // creates headers that protect from attacks (security)
const bodyParser = require('body-parser')  // turns response into usable format
const cors = require('cors')               // allows/disallows cross-site communication
const morgan = require('morgan')           // logs requests

const client = `http://localhost:${process.env.CLIENT_PORT}`
var corsOptions = {
    origin: client
  }

app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => res.send('server: ok'));
app.get('/books', (req, res)     => main.getTableData(req, res, db))
app.get('/books/:id', (req, res) => main.queryById(req, res, db))
app.post('/books', (req, res) => main.postTableData(req, res, db))
app.put('/books', (req, res) => main.putTableData(req, res, db))
app.delete('/books', (req, res) => main.deleteTableData(req, res, db))

app.listen(process.env.PORT || 4000, () => {
    console.log(`app is running on port ${process.env.PORT || 4000}`);
})