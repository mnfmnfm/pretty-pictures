const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('server yay');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
