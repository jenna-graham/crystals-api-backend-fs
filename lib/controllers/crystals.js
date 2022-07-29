const { Router } = require('express');
const Crystal = require('../models/Crystal');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const crystal = await Crystal.getById(req.params.id);
    console.log(crystal);
    res.json(crystal);
  })
  .get('/', async (req, res) => {
    const crystals = await Crystal.getAll();
    const ids = crystals.map((crystal) => ({
      id: crystal.id,
      name: crystal.name,
    }));
    res.json(ids);
  });
module.exports = router;
