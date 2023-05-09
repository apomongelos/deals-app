import './ReviewStars.css';

export const DealCard = ({
  dealID,
  title,
  internalName,
  normalPrice,
  salePrice,
  savings,
  thumb,
  dealRating,
}) => {
  const ratingNum = parseFloat(dealRating.toString());

  const starPercentage = (ratingNum / 10) * 100;
  const starWidth = `${Math.round((starPercentage / 100) * 5 * 10) / 10}rem`;
  const savingsDeal = Math.floor(parseFloat(savings));

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="position-relative">
          <img src={thumb} className="card-img-top" alt={internalName} />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {savingsDeal}%off
          </span>
        </div>
        <div className="row no-gutters">
          <div className="col-12">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <p className="card-text text-center">
                <small className="text-muted">Stream Review</small>
              </p>

              <div className="stars-outer d-flex align-items-center justify-content-center">
                <div className="stars-inner" style={{ width: starWidth }}>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <a href="#" className="btn btn-primary w-100">
                <small className="text-decoration-line-through">
                  ${normalPrice}
                </small>
                {salePrice}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
