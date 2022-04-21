const mongoose = require('mongoose');

// const url = 'mongodb://127.0.0.1:27017/books-app'; // db url

const url = 'mongodb+srv://cluster0admin:cluster0password@cluster0.pm8ls.mongodb.net/sample_training?retryWrites=true&w=majority';
mongoose.connect(url);
