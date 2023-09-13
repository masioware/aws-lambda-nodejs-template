"use strict";

module.exports.index = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Your function executed successfully!",
      input: event,
    }),
  };
};
