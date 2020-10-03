const errorHandler = (err, req, res, next) => {
  console.log(typeof (err));
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).json({ message: err });
  }

  if (typeof (err) === 'object') {
    // mongoose validation error
    return res.status(400).json({ message: err.message ? err.message : JSON.stringify(err) });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
