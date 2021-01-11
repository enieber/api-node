const RestifyErrors = require('restify-errors');

const checkImage = require('./checkImage');

const controll = {
	imageVerify: function(req, res, next) {
		try {
			const data = req.body.image
			const message = checkImage(data)
		  return res.send({ message });
		} catch(err) {
			if (err instanceof TypeError) {
				const errorReceive = new RestifyErrors.BadRequestError(err.message);
				return next(errorReceive)
			}
			const errMessage = new InternalServerError(err.message)
			return next(errMessage)
		}
	}
};

module.exports = controll
