const express = require('express');
const cors = require('cors');

const config = require('./config.js');
const v1Router = require('./v1/routes');

const app = express();
const PORT = config.SERVER_PORT;

app.use(express.json());
app.use(cors());

app.use('/api/v1', v1Router);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
