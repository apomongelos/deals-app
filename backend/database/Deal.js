const dealsDB = require('./deals.json');

const getAllDeal = () => {
  try {
    return dealsDB;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getDealById = (dealId) => {
  try {
    const deal = dealsDB.find((deal) => deal.dealID === dealId);
    return deal;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllDeal,
  getDealById,
};
