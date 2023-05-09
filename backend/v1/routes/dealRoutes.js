const express = require('express');
const dealRoutes = express.Router();

const dealController = require('../../controllers/dealController.js');

dealRoutes
  .get('/', dealController.getAllDeals)
  .get('/:dealId', dealController.getDealById)
  .post('/', dealController.createNewDeal)
  .put('/:dealId', dealController.updateOneDeal)
  .delete('/:dealId', dealController.deleteOneDeal);

module.exports = dealRoutes;
