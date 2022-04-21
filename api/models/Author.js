const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Author name required']
  },
  genre:{
    type: String,
    required: [true, 'Genre required']
  }
}, {timestamps: true});
const Author = mongoose.model('author', authorSchema);
module.exports = Author;
