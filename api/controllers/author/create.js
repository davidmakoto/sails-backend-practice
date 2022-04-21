
const Author = require('../../models/Author');
module.exports = async function create(req, res) {
  sails.log.debug('TODO: implement');
  try{
    const author = await Author.create(req.body);
    if (!author){
      throw new Error('Failed to create author');
    }
    res.status(201).json({message:'Author created', author:author});
  }catch(e){
    res.status(400).json({message: e.message});
  }
};
