  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;