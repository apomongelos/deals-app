const express = require('express');
const apiRoutes = express.Router();

const dealRoutes = require('./dealRoutes');

apiRoutes.use('/deals', dealRoutes);

module.exports = apiRoutes;
