const Deal = require('../database/Deal');
const filtersProps = require('../helpers/filters');

const getAllDeals = (filterParams) => {
  try {
    let filteredDeals = Deal.getAllDeal();
    for (let { property, sign, value } of filterParams) {
      const filterFunction = filtersProps[property][sign];
      if (typeof filterFunction !== 'function') {
        return [];
      }
      filteredDeals = filterFunction(filteredDeals, value);
    }

    return filteredDeals;
  } catch (error) {
    throw error;
  }
};
const getDealById = (dealId) => {
  try {
    const deal = Deal.getDealById(dealId);
    return deal;
  } catch (error) {
    throw error;
  }
};
const createNewDeal = () => {
  return;
};
const updateOneDeal = () => {
  return;
};
const deleteOneDeal = () => {
  return;
};

module.exports = {
  getAllDeals,
  getDealById,
  createNewDeal,
  updateOneDeal,
  deleteOneDeal,
};
