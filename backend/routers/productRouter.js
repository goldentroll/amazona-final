import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { isAuth, isAdmin, isSeller } from '../utils.js';

const productRouter = express.Router();

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || '';
    const category = req.query.category || '';
    const seller = req.query.seller || '';
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
    const rating =
      req.query.rating && Number(req.query.rating) !== 0
        ? Number(req.query.rating)
        : 0;

    const categoryFilter = category ? { category } : {};
    const priceFilter =
      min && max
        ? {
            price: { $gte: Number(min), $lte: Number(max) },
          }
        : {};
    const ratingFilter = rating ? { rating: { $gte: rating } } : {};
    const sellerFilter = seller ? { seller } : {};
    const nameFilter = name
      ? {
          name: {
            $regex: name,
            $options: 'i',
          },
        }
      : {};
    const order = req.query.order
      ? req.query.order === 'lowest'
        ? { price: 1 }
        : req.query.order === 'highest'
        ? { price: -1 }
        : req.query.order === 'newest'
        ? { _id: -1 }
        : { rating: -1 }
      : { _id: -1 };
    const products = await Product.find({
      ...sellerFilter,
      ...categoryFilter,
      ...nameFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .populate('seller', 'seller.name seller.logo')
      .sort(order);
    res.send(products);
  })
);

productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

productRouter.get(
  '/seller',
  isSeller,
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({ seller: req.user._id });
    res.send(products);
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id }).populate(
      'seller',
      '_id seller.name seller.logo seller.rating seller.numReviews'
    );
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  })
);
productRouter.post(
  '/:id/reviews',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        data: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        message: 'Review saved successfully.',
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.price = req.body.price;
      product.image = req.body.image;
      product.images = req.body.images;
      product.brand = req.body.brand;
      product.category = req.body.category;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        return res
          .status(200)
          .send({ message: 'Product Updated', data: updatedProduct });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Product.' });
  })
);

productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
      await deletedProduct.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.send('Error in Deletion.');
    }
  })
);

productRouter.post(
  '/',
  isAuth,
  isSeller,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample name',
      price: 0,
      seller: req.user._id,
      image: '/images/p1.jpg',
      brand: 'sample brand',
      category: 'sample category',
      countInStock: 0,
      description: 'sample description',
      rating: 0,
      numReviews: 0,
    });
    const createdProduct = await product.save();
    if (createdProduct) {
      return res
        .status(201)
        .send({ message: 'Product Created', product: createdProduct });
    }
    return res.status(500).send({ message: 'Error in Creating Product' });
  })
);

export default productRouter;
