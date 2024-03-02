const getVars = require('./helpers/getVars');

exports.handler = async (event) => {
  return await getVars(event);
};
