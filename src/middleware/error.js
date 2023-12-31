import { EError } from '../services/errors/enums.js';

export default (error, req, res, next) => {
  console.log(error.cause);

  switch (error.code) {
    case EError.INCOMPLETE_FIELD_ERROR:
      res.status(400).send({
        status: 'error',
        error: error.name,
        cause: error.cause,
      });
      break;

    default:
      res.send({
        status: 'error',
        error: 'Unhandler error',
      });
      break;
  }
};