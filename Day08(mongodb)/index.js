const dbConnect = require('./db.js')


// read data:
const read = async () => {
    let data = await dbConnect();
    data= await data.find({}).toArray();
    console.log(data);
}
// read();

// insert data:
const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {movie:"superman"},
            {movie:"thanos"},
            {movie:"marvel captain"}

        ]
    );
    if(result.acknowledged){
        console.log('data entered ')
    }else{
        console.warn('error')
    }
}
// insert();

//update records:

const updateData = async ()=> {
    let data = await dbConnect();
    let result = await data.updateOne(
        {movie:"Thor"},{
            $set: {movie:'captain marvel'}
        }
    )
    if(result.acknowledged){
        console.log('count of record edited:',result.matchedCount)
    }
    // console.log(result)

}

// updateData();

//delete data:

const deleteData = async () =>{
    let data = await dbConnect();
    let result = await data.deleteMany({movie:'thanos'})
    if(result.acknowledged){
        console.log("Deleted count: ",result.deletedCount)
    }
}
// deleteData();

