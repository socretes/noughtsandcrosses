

exports.logger = function logger(req, res, next){
  console.log(req.url + " visited");
  next();
};
