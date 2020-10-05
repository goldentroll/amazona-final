1. Introduction to this course
   1. what you will build
   2. what you will learn
   3. who are audiences
2. Install Tools
   1. Code Editor
   2. Web Browser
   3. VS Code Extension
3. Website Template
   1. Create amazona folder
   2. create template folder
   3. create index.html
   4. add default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements
4. Display Products
   1. create products div
   2. add product attributes
   3. add link, image, name and price
5. Create React App
   1. npx create-react-app frontend
   2. npm start
   3. Remove unused files
   4. copy index.html content to App.js
   5. copy style.css content to index.css
   6. replace class with className
6. Share Code On Github
   1. Initialize git repository
   2. Commit changes
   3. Create github account
   4. Create repo on github
   5. connect local repo to github repo
   6. push changes to github
7. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. Create Product component
   5. Use Rating component
8. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action
9. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
10. Load Products From Backend
    1. edit HomeScreen.js
    2. define products, loading and error.
    3. create useEffect
    4. define async fetchData and call it
    5. install axios
    6. get data from /api/products
    7. show them in the list
    8. create Loading Component
    9. create Message Box Component
    10. use them in HomeScreen
11. Install ESlint For Code Linting
    1. install VSCode eslint extension
    2. npm install -D eslint
    3. run ./node_modules/.bin/eslint --init
    4. Create ./frontend/.env
    5. Add SKIP_PREFLIGHT_CHECK=true
12. Add Redux to Home Screen
    1. npm install redux react-redux
    2. Create store.js
    3. initState= {products:[]}
    4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
    5. export default createStore(reducer, initState)
    6. Edit HomeScreen.js
    7. shopName = useSelector(state=>state.products)
    8. const dispatch = useDispatch()
    9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
    10. Add store to index.js
13. Add Redux to Product Screen
    1. create product details constants, actions and reducers
    2. add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/product/:id to backend api
14. Handle Add To Cart Button
    1. Handle Add To Cart in ProductScreen.js
    2. create CartScreen.js
15. Implement Add to Cart Action
    1. create addToCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length
16. Build Cart Screen
    1. create 2 columns for cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. Proceed to Checkout button
    5. Implement remove from cart action
17. Implement Remove From Cart Action
    1. create removeFromCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
18. Create Sample Users In MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create userRoute
    9. Seed sample data
19. Create Sample Products In MongoDB
    1. create models/productModel.js
    2. create productSchema and productModel
    3. create productRoute
    4. Seed sample data
20. Create Sign-in Backend
    1. create API for /api/users/signin
    2. create isAuth middleware
21. Design SignIn Screen
    1. create SigninScreen
    2. render email and password fields
    3. create signin constants, actions and reducers
    4. Update Header based on user login
22. Implement SignIn Action
    1. create signin constants, actions and reducers
    2. add reducer to store.js
    3. use action in SigninScreen.js
23. Create Register Backend and Screen
    1. create API for /api/users/register
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen
    5. Add fields
    6. Style fields
    7. Add screen to App.js
24. Implement Register Action
    1. create register constants, actions and reducers
    2. add reducer to store.js
    3. use action in RegisterScreen.js
25. Create Profile Backend and Screen
    1. create isAuth middleware
    2. create profile update api in backend
    3. create isAuth in utils.js and use in update profile
    4. create ProfileScreen.js
    5. add form elements
26. Implement Profile Action
    1. create user details constants, actions and reducers
    2. add reducer to store.js
    3. use action in ProfileScreen.js
    4. create update profile constants, actions and reducers
    5. add reducer to store.js
    6. use action in ProfileScreen.js
27. Design Checkout Wizard Screen
    1. create CheckoutSteps.js
    2. create div elements for step 1 to 4
    3. handle redirect in signin and register
    4. create shipping screen
28. Implement Checkout Wizard Action
    1. saveShippingAddress constant, reducer and actions
    2. copy shipping screen and as payment screen
    3. define getPayment and setPayment
    4. redirect user to PlaceOrder.js
29. Create Place Order API
    1. createOrder api
    2. create orderModel
    3. create orderRouter
    4. create post order route
30. Design PlaceOrder Screen
    1. create CartScreen.js
    2. Add checkout wizard
    3. Add shipping, payment and items preview
    4. Add Place Order button
31. Implement PlaceOrder Action
    1. handle place order button click
    2. create place order constants, action and reducer
32. Create Order Screen
    1. build order api for /api/orders/:id
    2. create OrderScreen.js
    3. dispatch order details action in useEffect
    4. load data with useSelector
    5. show data like place order screen
    6. create order details constant, action and reducer
33. Add PayPal Button
    1. get client id from paypal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen.js
    6. show paypal button
34. Implement Order Payment
    1. update order after payment
    2. create payOrder in api.js
    3. create route for /:id/pay in orderRouter.js
    4. rerender after pay order
35. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
36. List Users
    1. build api for list users
    2. Create UserList Screen
    3. create order details constant, action and reducer
37. Delete Users
    1. build api for delete users
    2. create order details constant, action and reducer
    3. Use action in UserListScreen
38. Edit User API and Screen
    1. build api for details and update users
    2. create edit screen UI
39. Edit User Action
    1. define user details constant, action and reducer
    2. show user info in edit screen
    3. define user update constant, action and reducer
    4. update user info in edit screen
40. List Products
    1. Create ProductList Screen
    2. Add to route
    3. use product list action
41. Delete Products
    1. build api for delete products
    2. create product delete constant, action and reducer
    3. Use action in ProductListScreen
42. Build Product Create and Update API
    1. build api for delete products
    2. build api for delete products
43. Create Product Action
    1. define product create constant, action and reducer
    2. use action in Product List Screen
44. Create Product Edit Screen
    1. create edit screen ui
    2. define product details constant, action and reducer
    3. use action in Product Edit Screen
45. Implement Edit Product Action
    1. define product update constant, action and reducer
    2. use action in Product Edit Screen
46. Upload Product Image
    1. npm install multer
    2. create routes/uploadRoute.js
    3. import express and multer
    4. create disk storage with Date.now().jpg as filename
    5. set upload as multer({ storage })
    6. router.post('/', upload.single('image'))
    7. app.use('/api/uploads',uploadRoute) in server.js
    8. create uploads folder and put empty file.txt there.
    9. ProductEditScreen.js
    10. create file input and set id to image-file
    11. handle image-file change
    12. create form data
    13. call uploadProductImage()
    14. create uploadProductImage in api.js
    15. update server.js
47. Admin Orders
    1. create Admin Order menu in header
    2. create AdminOrder.js
    3. load orders from backend
    4. list them in the screen
    5. show delete and edit button
    6. redirect to order details
    7. if order is payed show deliver button for admin
    8. handle click on deliver button
    9. set state to delivered
48. Implement Seller View
    1. add seller menu
    2. list products for seller
    3. list orders for seller
    4. add Seller to Product List and Details Screen
49. Create Seller Profile, Page and Carousel
    1. Add seller field to profile
    2. show seller field if user is seller
    3. upload seller logo
    4. create seller page
    5. show seller info and product
50. Search Products
    1. create search bar in Header.js
    2. add style
    3. handle submit form
    4. edit parse url to get query string
    5. update product list api for search keyword
51. Review Products and Sellers
    1. create review form in product screen
    2. Implement product review api
    3. show reviews
    4. create review form in seller screen
    5. Implement seller review api
    6. show reviews
52. Publish on heroku
    1. Create git repository
    2. Create heroku account
    3. install Heroku CLI
    4. heroku login
    5. heroku apps:create <yourname>mernmp
    6. Edit package.json for build script
    7. `cd frontend && npm install && npm run build`
    8. Edit package.json for node engines
    9. `"engines": { "node": "12.4.0", "npm": "6.9.0" }`
    10. Create Procfile
    11. `web: node --experimental-modules backend/server.js`
    12. Create mongodb atlas database
    13. create MongoDB Account
    14. open cloud.mongodb.com
    15. add new user and save username and password
    16. set Network Access to accept all requests
    17. Create new database
    18. create connection string based on db name and user and password
    19. Set Cloud MongoDB connection in heroku env variables
    20. Commit and push
