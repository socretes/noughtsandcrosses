
exports.notFound = function notFound(req, res, next){
  res.send(404, 'Resource not found.');
};
