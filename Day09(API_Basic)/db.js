const {MongoClient} = require('mongodb')
// require('dotenv').config();
const database = "Movies";
url = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(url);
async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return collection = db.collection('MCU');
    // let res = await collection.find({}).toArray()
    // console.log(res);
}

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })

//or we can use await :

module.exports = dbConnect;