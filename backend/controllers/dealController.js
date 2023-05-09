const dealRepository = require('../repositories/dealRepository');

const getAllDeals = (req, res) => {
  const filters = req.query.q ? decodeURIComponent(req.query.q).split(',') : [];

  const filtered = filters.map((filter) => {
    const [property, value] = filter.split(/:|<|>/);
    const sign = filter.match(/:|<|>/)[0];

    return { property, sign, value };
  });

  try {
    const allDeals = dealRepository.getAllDeals(filtered);
    res.send({ status: 'ok', data: allDeals });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getDealById = (req, res) => {
  const {
    params: { dealId },
  } = req;

  if (!dealId) return;

  try {
    const deal = dealRepository.getDealById(dealId);
    res.send({ status: 'OK', data: deal });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createNewDeal = (req, res) => {
  const { body } = req;

  const createdDeal = dealRepository.createNewDeal(body);
  res.status(201).send({ status: 'OK', data: { createdDeal } });
};

const updateOneDeal = (req, res) => {
  const updatedDeal = dealRepository.updateOneDeal();
  res.send(updatedDeal);
};

const deleteOneDeal = (req, res) => {
  dealRepository.deleteOneDeal();
  res.send('Delete one deal');
};

module.exports = {
  getAllDeals,
  getDealById,
  createNewDeal,
  updateOneDeal,
  deleteOneDeal,
};
