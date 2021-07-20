const router = require('express').Router();
const Task = require('../models/tasks');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const newTask = await new Task(req.body);
  try {
    const saveTask = await newTask.save();
    res.status(200).json(saveTask);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.put('/:id', async (req, res) => {
  try {
    const tasks = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.json(tasks);
  } catch (error) {
    res.json(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.params.id);
    res.json(tasks);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
