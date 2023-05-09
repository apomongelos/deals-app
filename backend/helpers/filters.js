const titleFilters = {
  '=': (dealsFiltered, value) => {
    return dealsFiltered.filter((deal) => deal.title === value);
  },
  ':': (dealsFiltered, value) => {
    return dealsFiltered.filter((deal) =>
      deal.title.toLowerCase().includes(value.toLowerCase())
    );
  },
};
const salePriceFilters = {
  '<': (dealsFiltered, value) => {
    return dealsFiltered.filter(
      (deal) => Number(deal.salePrice) < Number(value)
    );
  },
  '>': (dealsFiltered, value) => {
    return dealsFiltered.filter(
      (deal) => Number(deal.salePrice) > Number(value)
    );
  },
};

const filtersProps = {
  title: titleFilters,
  salePrice: salePriceFilters,
};

module.exports = filtersProps;
