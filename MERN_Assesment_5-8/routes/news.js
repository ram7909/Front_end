import express from "express";
import { addNews, deleteNewsById, getNews, getNewsById, newsByCategory, updateNewsById } from "../controllers/News.js";

const router  = express.Router();

// @method = get
// @route = /api/news/get
// @desc = to see all news
router.get('/get',getNews)


// @method = add
// @route = /api/news/add
// @desc = to add new news
router.post('/add',addNews);

// @method = get
// @route = /api/news/
// @desc = to see news by id
router.get('/:id',getNewsById);

// @method = delete
// @route = /api/news/
// @desc = to delete news by id
router.delete('/:id',deleteNewsById);

// @method = update or edit
// @route = /api/news/
// @desc = to update news by id
router.put('/:id',updateNewsById);

// @method = get
// @route = /api/news/category/get
// @desc = to search news by category
router.get('/category/get',newsByCategory);



export default router ;