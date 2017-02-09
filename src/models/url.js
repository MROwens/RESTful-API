var db = require("./db");

exports.create = (payload,success,err) => {
  db.url.create(payload).then(success).catch(err);
}

exports.findAll = (payload,success,err) => {
  db.url.findAll(payload).then(success).catch(err);
}

exports.findOne = (payload, success, err) => {
  db.url.findOne(payload).then(success).catch(err);
}
