import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating';
import { prices, ratings } from '../utils';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function SearchScreen(props) {
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    categories,
    error: errorCategories,
    loading: loadingCategories,
  } = productCategoryList;

  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;

  const {
    category = 'all',
    name = 'all',
    order = 'newest',
    min = 0,
    max = 1000000,
    rating = 0,
  } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listProducts({
        order,
        category: category !== 'all' ? category : '',
        name: name !== 'all' ? name : '',
        min,
        max,
        rating,
      })
    );

    return () => {
      //
    };
  }, [category, order, min, max, rating, dispatch, name]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterOrder = filter.order || order;

    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max || max;
    const filterRating = filter.rating || rating;

    return `/search/category/${filterCategory}/name/${filterName}/order/${filterOrder}/min/${filterMin}/max/${filterMax}/rating/${filterRating}`;
  };

  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>
            {products.length} Results
            {category !== 'all' && ` : ${category}`}
            {name !== 'all' && ` : ${name}`}
            {rating > 0 && ` : ${rating} Stars & Up`}
            {min !== 0 && ` : $${min} to $${max}`}
            {category !== 'all' || name !== 'all' || rating > 0 || min ? (
              <>
                &nbsp;
                <button
                  type="button"
                  className="small"
                  onClick={() => props.history.push('/search')}
                >
                  Remove Filter
                </button>
              </>
            ) : null}
          </div>
        )}

        <div>
          Sort By{' '}
          <select
            value={order}
            onChange={(e) => {
              props.history.push(
                getFilterUrl({
                  order: e.target.value,
                })
              );
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Reviews</option>
          </select>
        </div>
      </div>
      <div className="row top">
        <div className="col-1">
          <div>
            <h3>Department</h3>
            <ul>
              <li>
                <Link
                  className={category === 'all' ? 'active' : ''}
                  to={getFilterUrl({ category: 'all' })}
                >
                  Any
                </Link>
              </li>
              {loadingCategories ? (
                <li>Loading...</li>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                categories.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === category ? 'active' : ''}
                      to={getFilterUrl({ category: c })}
                    >
                      {c}
                    </Link>{' '}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3>Price</h3>
            <ul>
              {prices.map((x) => (
                <li key={x.name}>
                  <Link
                    className={
                      `${x.min}-${x.max}` === `${min}-${max}` ? 'active' : ''
                    }
                    to={getFilterUrl({ min: x.min, max: x.max })}
                  >
                    {x.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Avg. Customer Review</h2>
            <ul>
              {ratings.map((x) => (
                <li key={x.rating}>
                  <Link
                    className={`${x.rating}` === rating ? 'active' : ''}
                    to={getFilterUrl({
                      rating: x.rating,
                    })}
                  >
                    <Rating value={x.rating} text=" & Up" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-3">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="row center">
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
