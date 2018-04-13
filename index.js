"use strict";

var Promise = require("bluebird");
var dynogels = require("@aneilbaboo/dynogels");

Promise.promisifyAll(require('@aneilbaboo/dynogels/lib/table').prototype);
Promise.promisifyAll(require('@aneilbaboo/dynogels/lib/item').prototype);
Promise.promisifyAll(require('@aneilbaboo/dynogels/lib/query').prototype);
Promise.promisifyAll(require('@aneilbaboo/dynogels/lib/scan').prototype);
Promise.promisifyAll(require('@aneilbaboo/dynogels/lib/parallelScan').prototype);

var dynogels_model = dynogels.model;
dynogels.model = function(name, model){
  if (model) { Promise.promisifyAll(model); }
  return dynogels_model.apply(dynogels, arguments);
};

Promise.promisifyAll(dynogels);

module.exports = dynogels;
