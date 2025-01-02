const express = require('express');
const CategoryService = require('../services/categoryService');
const validatorHandler = require('../middlewares/validatorHandler');

const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categorySchema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch(error) {
      next(error)
    }
});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json({newCategory});
});

router.put('/:id',
  validatorHandler(updateCategorySchema, 'body'),
  async(req, res) => {
    const body = req.body;
    const { id } = req.params;
    const category = await service.update(id, body);
    res.json(category);
});

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async(req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch(error){
      next(error);
    }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await service.delete(id);
  res.json(deletedCategory);
})

router.get('/:categoryID/products/:productID', (req, res) => {
  const { categoryID, productID } = req.params;
  res.json({
    categoryID,
    productID
  });
});

module.exports = router;
