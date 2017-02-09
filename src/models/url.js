var db = require("./db");

exports.create = (payload,success,err) => {
  db.url.create(payload).then(success).catch(err);
}

exports.findAll = ()
