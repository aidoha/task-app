const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const { id: _id } = req.params;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['completed', 'description'];
  const isValidUpdate = updates.every((x) => allowedUpdates.includes(x));

  try {
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: false,
      runValidators: true,
    });
    if (!isValidUpdate) {
      return res.status(400).send('Updates are invalid');
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
