const { Router } = require('express');
const { postReview } = require('../Controllers/postReview');
const { getReview, getReviewByUser, getReviewByProduct } = require('../Controllers/getReviews')
const { updateReview } = require('../Controllers/updateReview')
const { deleteReview } = require('../Controllers/deleteReview')

const reviewRoutes = Router();

reviewRoutes.post('/review', postReview);

reviewRoutes.get('/review', getReview);

reviewRoutes.get('/review/user/:id', getReviewByUser);

reviewRoutes.get('/review/product/:id', getReviewByProduct);

reviewRoutes.put('/review', updateReview);

reviewRoutes.delete('/review/:id', deleteReview)

module.exports = reviewRoutes;