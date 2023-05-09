import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getDealsByName } from '../helpers';
import { DealCard } from '../components';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  const [deals, setDeals] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const getData = async (q) => {
    const newData = await getDealsByName(q);
    setDeals(newData);
  };

  useEffect(() => {
    getData(q);
  }, [q]);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && deals.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a game with deal"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a deals
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            No deals with <b>{q}</b>
          </div>

          {deals.map((deal) => (
            <DealCard key={deal.dealID} {...deal} />
          ))}
        </div>
      </div>
    </>
  );
};
