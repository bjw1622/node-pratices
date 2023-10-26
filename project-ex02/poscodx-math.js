module.exports = {
  PI: 3.14,
  max: function () {
    var max = Number.MAX_SAFE_INTEGER;
    Array.prototype.forEach.call(arguments, function (e) {
      if (e > min) {
        min = e;
      }
    });
    return min;
  },
};
