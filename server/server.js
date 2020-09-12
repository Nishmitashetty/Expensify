const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
//public app serves all assets in public directory



app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
  });
  
  app.listen(3000, () => {
    console.log('Server is up!');
  });
  

//3000=port that express should use



