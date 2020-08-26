import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { listTopSellers } from '../actions/userActions';

function HomeScreen(props) {
  const category = props.match.params.id ? props.match.params.id : '';

  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const userTopSellers = useSelector((state) => state.userTopSellers);
  const {
    sellers,
    loading: loadingSellers,
    error: errorSellers,
  } = userTopSellers;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts({ category, searchKeyword, sortOrder }));
    dispatch(listTopSellers());

    return () => {
      //
    };
  }, [category]);
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts({ category, searchKeyword, sortOrder }));
  };

  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(
      listProducts({ category, searchKeyword, sortOrder: e.target.value })
    );
  };
  return (
    <div>
      <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox />
      ) : errorSellers ? (
        <MessageBox variant="error">{errorSellers}</MessageBox>
      ) : (
        <Carousel showArrows autoPlay>
          {sellers.map((user) => (
            <div key={user._id}>
              <Link to={`/seller/${user._id}`}>
                <img src={user.seller.logo} alt={user.seller.name} />
                <p className="legend">{user.seller.name}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      )}

      <h2>Featured Products</h2>
      <div className="row center">
        <div>
          <form onSubmit={searchHandler}>
            <input
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button className="primary" type="submit">
              Search
            </button>
          </form>
        </div>
        <div>
          &nbsp; Sort by{' '}
          <select value={sortOrder} onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found.</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default HomeScreen;
