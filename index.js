'use strict';

function comparator(a, b) {
  return a - b;
}

module.exports = function(arr, cmp) {
  cmp = cmp || comparator;
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    // set minimu to this position
    var min = i;
    for (var j = i + 1; j < len; j++) {
      if (cmp(arr[min], arr[j]) > 0) {
        min = j;
      }
    }

    // if the minimu isn't in the position, swap it
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
};