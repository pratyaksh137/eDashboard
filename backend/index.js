const express = require('express');
const app = express();

app.get('', (req,resp)=>{
  resp.send('Looking good')
});

app.listen(5000);
