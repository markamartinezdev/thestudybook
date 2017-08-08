const express = require('express');
const path = require('path');
const app = express();

/* Serve static files from the React app*/
app.use(express.static(path.join(__dirname, 'client/public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/src/index.html'));
});
const port = process.env.PORT || 3005;
app.listen(port);

