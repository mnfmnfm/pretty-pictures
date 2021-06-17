// configuration: imports and middleware
const express = require('express');
const app = express();

require('dotenv').config();

// middleware: including something that helps with all of our other requests
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3002;

// const getPictures = require('./routeHandlers/getPictures');
// const root = require('./routeHandlers/root');
const routeHandlers = require('./routeHandlers');

// routes: what paths should exist
// AND for each of those routes, what handler code should we run
app.get('/', routeHandlers.root);
app.get('/pictures', routeHandlers.getPictures);

// configuration part 2
app.listen(PORT, () => console.log(`listening on ${PORT}`));
