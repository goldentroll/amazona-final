# Amazona ECommerce Website

Hello and Welcome to my coding course to build an ecommerce website like amazon by MERN stack. In this course you will learn the essential tools and skills to design, develop and deploy a fully-function marketplace website using React and Redux in frontend and Node and MongoDB in backend.

## What You Will Learn

- create functional component by react
- use react hooks to handle form inputs
- manage application state by redux using custom hooks
- create backend web api by node and express js
- design database model by mongodb
- perform CRUP operations on orders, products and users by mongoose ORM
- handle authentication and authorization using JsonWebToken
- create seller and admin roles to manage products, orders and users
- handle shopping cart for customer to place orders-

## Audiences

This course is for non-coders or juniors who want to be a professional web developer to get a job in 22 million job opportunities around the world. Basic knowledge of web developments like html, css and basic javascript is necessary for this course.

## What You Will Build

1.  Home Screen
    1. Create react app
    2. List data using JSX and map function
2.  Product Screen
    1. Url routing in react
    2. Handle events in react
3.  Cart Screen
    1. Save and retrieve data in local storage
    2. Working javascript array functions
    3. Update summary based on cart changes
4.  Sign-in and Register Screen
    1. Create dynamic form
    2. Input validation in frontend and backend
    3. Create web server using node.js
    4. Connect to Mongodb database
    5. Add registered user to the database
    6. Authenticate user based on email and password
    7. Using Jsonwebtoken to authorize users
5.  Shipping and Payment Screen
    1. Create wizard form to get user data in multiple steps
    2. Save user info in the local storage
6.  Place Order Screen
    1. Validate and create order in the database
7.  Order Screen
    1. Payment with Paypal
    2. Show order state based on user and admin activities
8.  Profile Screen
    1. Create authenticated routes
    2. enable user to update their informations
    3. enable user to logout and clear local storage
    4. show list of orders to user and link it to details
9.  Seller Menu
    1. add products, upload files
    2. manage orders
10. Admin Menu
    1.  manage users
    2.  add seller permission

# Lessons

1.  Introduction to this course
    1. what you will build
    2. what you will learn
    3. who are audiences
2.  Install Tools
    1. Code Editor
    2. Web Browser
    3. VS Code Extension
3.  Website Template
    1. Create amazona folder
    2. create template folder
    3. create index.html
    4. add default HTML code
    5. link to style.css
    6. create header, main and footer
    7. style elements
4.  Publish Project To Github
    1. Initialize git repository
    2. Commit changes
    3. Create github account
    4. Create repo on github
    5. connect local repo to github repo
    6. push changes to github
5.  Create React App
    1. npx create-react-app frontend
    2. npm start
    3. Remove unused files
    4. copy index.html content to App.js
    5. copy style.css content to index.css
    6. replace class with className
6.  Use React Router Dom
    1. npm install react-router-dom
    2. define Route
    3. Create Home Screen
    4. Create Product Screen
7.  List Products on Home Screen
    1. create data.js
    2. put 6 products there
    3. copy product images to images folder
    4. map data.products to JSX in HomeScreen
    5. create Product.js component
    6. update style to products
8.  Create Rating Component
    1. create components/Rating.js
    2. link to fontawesome.css in index.html
    3. create div.rating
    4. define Rating object with render()
    5. if !props.value return empty div
    6. else use fa fa-star, fa-star-half-o and fa-star-o
    7. last span for props.text || ''
    8. style div.rating, span and last span
    9. Edit Product component
    10. Use Rating component
9.  Add Sidebar Menu
    1. create aside element
    2. put product categories
    3. add open and close menu
10. Create Product Details Screen
    1. Create 3 columns for product
    2. column 1 for image
    3. column 2 product information
    4. column 3 from add to cart button
    5. Add style
11. Create Node.JS Server
    1. run npm init in root folder
    2. npm install express
    3. create server.js
    4. add start command as node backend/server.js
    5. require express
    6. create route for / return backend is ready.
    7. move products.js from frontend to backend
    8. create route for /api/products
    9. return products
    10. run npm start
12. Load Products From Backend
    1. edit HomeScreen.js
    2. define products, loading and error.
    3. create useEffect
    4. define async fetchData and call it
    5. install axios
    6. get data from /api/products
    7. show them in the list
13. Install ESlint For Code Linting
    1. npm install -D eslint
    2. install VSCode eslint extension
    3. Set VSCode setting for eslint
    4. Install prettier extension
    5. npm install -D eslint-config-prettier
    6. Add extends: "prettier"
14. Add Redux to Home Screen
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
15. Show Loading and Message Box
    1. Create Loading Component
    2. Create Message Box Component
    3. Use them in HomeScreen
16. Add Redux to Product Screen
    1. create product details constants, actions and reducers
    2. add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/product/:id to backend api
17. Handle Add To Cart Button
    1. Handle Add To Cart in ProductScreen.js
    2. create CartScreen.js
18. Implement Add to Cart Action
    1. create addToCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length
19. Design Cart Screen
    1. create 2 columns for cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. cart action
    5. Subtotal
    6. Proceed to Checkout button
20. Implement Remove From Cart Action
    1. create removeFromCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
21. Switch From Babel To Native Node
    1. Update node
    2. Update package.json
    3. Add .js to imports
22. Insert Sample Data in MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create models/productModel.js
    9. create productSchema and productModel
    10. create userRoute
    11. Seed sample data
23. Create Sign-in Backend
    1. create API for /api/users/signin
    2. create isAuth middleware
24. Design SignIn Screen
    1. create SigninScreen
    2. render email and password fields
    3. create signin constants, actions and reducers
    4. Update Header based on user login
25. Register Screen
    1. create RegisterScreen.js
    2. add form elements
    3. after_render handle form submit
    4. create register request in frontend
    5. create register api in backend
26. User Profile Screen
    1. create ProfileScreen.js
    2. add form elements
    3. after_render handle form submit
    4. create profile update request in frontend
    5. create profile update api in backend
    6. create isAuth in utils.js and use in update profile
    7. implement sign out
27. Checkout Wizard
    1. create CheckoutSteps.js
    2. create div elements for step 1 to 4
    3. create redirectUser() in utils.js
    4. copy profile screen and as shipping screen
    5. use CheckoutStep
    6. define getShipping and setShipping
    7. copy shipping screen and as payment screen
    8. define getPayment and setPayment
    9. redirect user to PlaceOrder.js
28. PlaceOrder Screen UI
    1. create PlaceOrder.js
    2. style elements
29. PlaceOrder Screen Action
    1. handle place order button click
    2. createOrder api
    3. create orderModel
    4. create orderRouter
    5. create post order route
30. Order Screen
    1. create OrderScreen.js
    2. style elements
31. PayPal Payment
    1. get client id from paypal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen.js
    6. show paypal button
    7. update order after payment
    8. create payOrder in api.js
    9. create route for /:id/pay in orderRouter.js
    10. rerender after pay order
32. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
33. Admin Dashboard UI
    1. Header.js
    2. if user is admin show Dashboard
    3. create DashboardScreen
    4. create DashboardMenu
    5. Style dashboard
34. Admin Products UI
    1. create ProductListScreen.js
    2. show products with edit and delete button
    3. show create product button
35. Create Product
    1. create product model
    2. implement create product route
    3. create product function in api.js
    4. call create product function in ProductListScreen
    5. redirect to edit product
36. Edit Product UI
    1. create ProductEditScreen.js
    2. load product data from backend
    3. handle form submit
    4. save product in backend
37. Edit Product Backend
    1. handle form submit
    2. create updateProduct
    3. save product in backend
38. Upload Product Image
    1. npm install multer
    2. create routes/uploadRoute.js
    3. import express and multer
    4. create disk storage with Date.now().jpg as filename
    5. set upload as multer({ storage })
    6. router.post('/', upload.single('image'))
    7. return req.file.path
    8. app.use('/api/uploads',uploadRoute) in server.js
    9. create uploads folder and put empty file.txt there.
    10. ProductEditScreen.js
    11. create file input and set id to image-file
    12. after_render() handle image-file change
    13. create form data
    14. call uploadProductImage()
    15. create uploadProductImage in api.js
    16. update server.js
39. Build Project
    1. create build script for frontend
    2. create build script for backend
    3. update sever.js to serve frontend build folder and uploads folder
    4. stop running frontend
    5. npm run build
    6. check localhost:5000 for running website and showing images
40. Delete Product
    1. update ProductListScreen.js
    2. handle delete button
    3. rerender after deletion
41. Admin Orders
    1. create Admin Order menu in header
    2. create AdminOrder.js
    3. load orders from backend
    4. list them in the screen
    5. show delete and edit button
    6. redirect to order details on edit action
42. Deliver Order
    1. if order is payed show deliver button for admin
    2. handle click on deliver button
    3. set state to delivered
43. Show Summary Report in Dashboard
    1. create summary section
    2. style summary
    3. create summary backend
    4. create getSummary in api.js
    5. load data in dashboard screen
    6. show 3 boxes for Users, Orders and Sales
44. Show Chart in Dashboard
    1. import chartist
    2. add chartist css to index.html
    3. create linear chart for daily sales
    4. create pie chart for product categories
45. Publish heroku
    1. Create git repository
    2. Create heroku account
    3. Install Heroku CLI
    4. `heroku login`
    5. `heroku apps:create <yourname>-amazona`
    6. Edit package.json
    7. `"heroku-postbuild": "cd frontend && npm install && npm run build"`
    8. `"engines": { "node": "12.4.0", "npm": "6.9.0" }`
    9. Create Procfile
    10. `web: node --experimental-modules backend/server.js`
    11. Create MongoDB Atlas Account
    12. Open cloud.mongodb.com
    13. Create new database
    14. Add new user and save username and password
    15. Set Network Access to accept all requests
    16. Copy connection string
    17. Replace db name, username and password with yours.
    18. `heroku config:set MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.nb7oz.mongodb.net/<dbname>?retryWrites=true&w=majority`
    19. Set SKIP_PREFLIGHT_CHECK=true
    20. `heroku config:set SKIP_PREFLIGHT_CHECK=true`
    21. Commit and push
    22. Open `https://<yourname>-amazona.herokuapp.com/api/users/seed`
    23. Open `https://<yourname>-amazona.herokuapp.com`
46. Product Search Bar
    1. create search bar in Header.js
    2. add style
    3. handle submit form
    4. edit parse url to get query string
    5. update product list api for search keyword
47. Show Categories In Sidebar Menu
    1. create aside-open-button in Header.js
    2. add event to open aside
    3. create Aside.js component
    4. Add style aside
    5. after render close it on click on close button
    6. Use it in index.html
    7. Update index.js to render aside 9.
    8. call getCategories
    9. create getCategories in api.js
48. Deploy on AWS Elastic Beanstalk
    1. Install elastic beanstalk
    2. add .elasticbeanstalk/ to .gitignore
    3. `eb init --platform node.js --region <your region like eu-west-2>`
    4. `eb create --sample node-express-env`
    5. `eb open`
    6. create file `.ebextensions/nodecommand.config`
    7. add option_settings `NodeCommand: "npm run serve"`
    8. add commands `command: "sudo chown -R 496:494 /tmp/.npm"`
    9. update package.json add `serve` script
    10. `cd frontend && npm install && npm run build && cd .. && node --experimental-modules backend/server.js`
    11. Set env variables
    12. `eb setenv MONGODB_URL="mongodb+srv://xx"`
    13. `eb setenv SKIP_PREFLIGHT_CHECK=true`
    14. optional env vars: GOOGLE_API_KEY, PAYPAL_CLIENT_ID and JWT_SECRET
    15. Commit changes
    16. `git add . && git commit`
    17. Deploy on aws
    18. `eb deploy`
    19. Watch logs
    20. `eb logs -cw enable`
    21. open `httpsconsole.aws.amazon.com/cloudwatch`
    22. select Logs > Log groups > Node.js Logs
49. Deploy on AWS LightSail

    1. mkdir -p ~/apps/newamazona-final/repo
    2. mkdir -p ~/apps/newamazona-final/dest
    3. cd repo
    4. git --bare init
    5. nano hooks/post-receive
       ```shell
       #!/bin/bash -l
       export SKIP_PREFLIGHT_CHECK=true
       echo 'post-receive: Triggered.'
       cd ~/apps/newamazona-final/dest/
       echo 'post-receive: git check out...'
       git --git-dir=~/apps/newamazona-final/repo/ --work-tree=~/apps/newamazona-final/dest/ checkout master -f
       echo 'post-receive: npm install...'
       npm install
       npm run build
       forever restart newamazona-final
       ```
    6. chmod ug+x hooks/post-receive
    7. create .env file in dest folder
    8. add MONGODB_URL, SKIP_PREFLIGHT_CHECK and PORT=4200
    9. npm install forever -g
    10. forever start --uid="newamazona-final" --sourceDir="~/apps/newamazona-final/dest/" backend/server.js
    11. sudo /opt/bitnami/bncert-tool
    12. nano /opt/bitnami/apache2/conf/bitnami/bitnami-ssl.conf

    ```shell
    <VirtualHost _default_:443>
      ServerName amazona.webacademy.pro
      # ...

      ProxyRequests Off
      <Proxy *>
            Order deny,allow
            Allow from all
      </Proxy>
      ProxyPass / http://localhost:4200/
      ProxyPassReverse / http://localhost:4200/
      # Error Documents
      ErrorDocument 503 /503.html
      # ...
    </VirtualHost>
    ```

    13. sudo /opt/bitnami/ctlscript.sh restart apache
    14. In Lightsail UI > Network > DNS > Add A amazona subdomain
    15. In Local computer
    16. git remote add academy ssh://bitnami@18.133.37.82/home/bitnami/apps/newamazona-final/repo/
    17. git add . && git commit -m "m" && git push academy
    18. open https://amazona.webacademy.pro
