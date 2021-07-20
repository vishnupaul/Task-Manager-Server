const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
