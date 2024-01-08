const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I am mastering DevOps, taking my learning journey yet to another level! This time around, I am making code changes to be built on CodeBuild and deploy via ElasticBeanstalk'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);



