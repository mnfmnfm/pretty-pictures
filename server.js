const express = require('express');
const app = express();

require('dotenv').config();

const cors = require('cors');
app.use(cors());

const axios = require('axios');

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('server yay');
});

app.get('/pictures', async (req, res) => {
  let searchQuery = req.query.searchQuery;
  // make the request using Axios to Unsplash for those pictures
  let unsplashData = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  // send that picture data back to the frontend
  console.log('yay', unsplashData.data.results);
  res.send(unsplashData.data.results);
})
app.listen(PORT, () => console.log(`listening on ${PORT}`));
