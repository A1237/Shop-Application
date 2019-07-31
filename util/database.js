const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(' mongodb+srv://akash:pL8lZ2DsR44Y0I1s@cluster0-yufxs.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true
    })
    .then(client => {
      console.log("CONNECTED");
      _db = client.db()

      callback()
    })
    .catch(err => console.log(err));
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No Database found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// EL4cxvtOdgEV7mYq

// mongodb://akash:EL4cxvtOdgEV7mYq@cluster0-shard-00-00-yufxs.mongodb.net:27017,cluster0-shard-00-01-yufxs.mongodb.net:27017,cluster0-shard-00-02-yufxs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority

// mongodb+srv://akash:<password>@cluster0-yufxs.mongodb.net/test?retryWrites=true&w=majority

// mongodb+srv://akash:pL8lZ2DsR44Y0I1s@cluster0-yufxs.mongodb.net/test?retryWrites=true&w=majority

// pL8lZ2DsR44Y0I1s