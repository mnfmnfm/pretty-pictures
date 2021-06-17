const axios = require('axios');
const Picture = require('../models/Picture.js');

let getPictures = async (req, res) => {
  let searchQuery = req.query.searchQuery;
  // make the request using Axios to Unsplash for those pictures
  let unsplashData = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  // send that picture data back to the frontend
  console.log('yay', unsplashData.data.results);
  res.send(unsplashData.data.results.map(data => new Picture(data)));
};

// this line means, when someone require's this file, give them the getPictures function
module.exports = getPictures;
