import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './components/SearchBox';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';

import SearchScreen from './screens/SearchScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import SellerScreen from './screens/SellerScreen';
import { signout } from './actions/userActions';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import OrderHistoryScreen from './screens/OrderHistoryScreen';

function App() {
  const dispatch = useDispatch();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const { categories, loading, error } = productCategoryList;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const handleSignout = () => {
    dispatch(signout());
    document.location.href = '/signin';
  };
  useEffect(() => {
    dispatch(listProductCategories());
    return () => {
      //
    };
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div className="brand">
            <button
              className="open-sidebar"
              type="button"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars" />
            </button>
            <Link to="/">amazona</Link>
          </div>
          <div>
            <Route render={({ history }) => <SearchBox history={history} />} />
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#admin">
                  {userInfo.name}{' '}
                  <i
                    className="fa fa-caret-down	
"
                  />
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory"> Order History </Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={handleSignout}>
                      SignOut
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin"> Sign In</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#seller">
                  Seller{' '}
                  <i
                    className="fa fa-caret-down	
"
                  />
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orderlist/seller"> Orders</Link>
                  </li>
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#seller">
                  Admin{' '}
                  <i
                    className="fa fa-caret-down	
"
                  />
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orderlist"> Orders</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className={sidebarIsOpen ? 'open' : ''}>
          <ul className="categories">
            <li>
              <strong>Shopping Categories</strong>
              <button
                type="button"
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
              >
                x
              </button>
            </li>
            {loading ? (
              <li>
                <LoadingBox />
              </li>
            ) : error ? (
              <li>
                <MessageBox variant="error">{error}</MessageBox>
              </li>
            ) : categories.length === 0 ? (
              <li>There is no categories.</li>
            ) : (
              categories.map((x) => (
                <li key={x}>
                  <Link
                    onClick={() => setSidebarIsOpen(false)}
                    to={`/search/category/${x}`}
                  >
                    {x}
                  </Link>

                  <span>
                    <i className="fa fa-arrow-right" />
                  </span>
                </li>
              ))
            )}
          </ul>
        </aside>
        <main>
          <div className="container py-3">
            <Route path="/userlist" component={UserListScreen} />
            <Route path="/orderlist/seller" component={OrderListScreen} />
            <Route path="/orderlist" component={OrderListScreen} exact />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/orderhistory" component={OrderHistoryScreen} />

            <Route path="/productlist/seller" component={ProductListScreen} />
            <Route path="/productlist" component={ProductListScreen} exact />

            <Route path="/product/:id/edit" component={ProductEditScreen} />
            <Route path="/seller/:id" component={SellerScreen} />
            <Route path="/user/:id/edit" component={UserEditScreen} />

            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route
              path="/search/category/:category/keyword/:keyword/order/:order/min/:min/max/:max/rate/:rate"
              component={SearchScreen}
            />
            <Route
              path="/search/keyword/:keyword?"
              component={SearchScreen}
              exact
            />
            <Route
              path="/search/category/:category"
              component={SearchScreen}
              exact
            />
            <Route path="/search" component={SearchScreen} exact />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </main>
        <footer className="row center">
          <div>© 2020 All right reserved.</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
