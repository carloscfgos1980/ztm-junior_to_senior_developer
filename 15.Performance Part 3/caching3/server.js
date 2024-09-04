const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use('/static', express.static(path.join(__dirname, public), {'maxAge': '2h'}));

app.get('/hi', (res, res) => {
    res.header('Cache-Control', 'public, max-age=86400')
    res.header('Content-Type', 'text-html')
    res.send(new Buffer('<h2>Test String</h2>'))
})

app.listen(3001, () => console.log('Example app listenning on port 3001!'))