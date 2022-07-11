const express = require('express');
const Router = express.Router({ caseSensitive: true });

Router.post('/challenge', (req, res, next) => {
  try {
    const reqBody = req.body.data;
    console.log(reqBody);
    const response = {
      is_success: true,
      user_id: 'john_doe_17091999',
      count: 0,
      email: 'john@xyz.com',
      numbers: [],
      alphabets: []
    };
    reqBody.forEach((element) => {
      if (
        (typeof element === 'string' || element instanceof String) &&
        /^[a-zA-Z]+$/.test(element)
      ) {
        response.alphabets.push(element);
        response.count = response.count + 1;
      } else if (
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(element)
      ) {
        response.email = element;
      } else if (
        typeof Number(element) === 'number' &&
        /^[0-9]+$/.test(element)
      ) {
        response.numbers.push(element);
        response.count = response.count + 1;
      } else if (/^[a-zA-Z0-9]+$/.test(element)) {
        response.roll_number = element;
      }
    });
    if (response.alphabets.length === 0) {
      delete response.alphabets;
    } else if (response.numbers.length === 0) {
      delete response.numbers;
    }

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({
      is_success: false,
      message: err.message
    });
  }
});

module.exports = Router;
