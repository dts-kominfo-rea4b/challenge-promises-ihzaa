const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise(async (resolve, reject) => {
    try {
      let counter = 0;
      const data = [...await promiseTheaterVGC(), ...await promiseTheaterIXX()];
      data.forEach(d => {
        if (d.hasil === emosi) counter++;
      });
      resolve(counter);
    } catch (err) {
      reject(err);
    }
  })
};

module.exports = {
  promiseOutput,
};
