import { useEffect, useState } from 'react';
import { DealCard } from './';
import { getDeals } from '../helpers';

export const DealList = () => {
  const [deals, setDeals] = useState([]);

  const getData = async () => {
    const newData = await getDeals();
    setDeals(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {deals.map((deal) => (
        <DealCard key={deal.dealID} {...deal} />
      ))}
    </div>
  );
};
