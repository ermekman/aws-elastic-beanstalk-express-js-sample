const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I am mastering DevOps, taking my learning journey yet to another level!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
