const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/batch_13')
    .then(() => console.log('Database is connected'))
    .catch(() => console.log('Database is not connected'))

const courseSchema = new mongoose.Schema({
    title: String,
    cType: String,
    noVideos: Number,
    author: String,
    active: Boolean
})

const courseRecord = new mongoose.model("courseRecord", courseSchema);

// const reactData=new courseRecord({
//     title:'React JS',
//     cType:'Front End',
//     noVideos:56,
//     author:'Richa Arora',
//     active:true
// })

// reactData.save();


//------------- async await------------
//-------------- store single data---------
// const createDocument=async()=>{
//     try{
//         const vueData=new courseRecord({
//             title:'Vue JS',
//                 cType:'Front End',
//                 noVideos:46,
//                 author:'Richa Arora',
//                 active:true

//         })
//         const result=await vueData.save();
//         console.log(result);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// createDocument();


//store multiple data
// const createDocument=async()=>{
//     try{
//         const htmlData=new courseRecord({
//             title:'HTML',
//                 cType:'Front End',
//                 noVideos:33,
//                 author:'Richa Arora',
//                 active:true

//         })
//         const cssData=new courseRecord({
//             title:'CSS',
//                 cType:'Design',
//                 noVideos:66,
//                 author:'Richa Arora',
//                 active:true

//         })
//         const jsData=new courseRecord({
//             title:'JavaScript',
//                 cType:'Design',
//                 noVideos:61,
//                 author:'Richa Arora',
//                 active:true
//         })

//         const result=await courseRecord.insertMany([htmlData,cssData,jsData]);
//         console.log(result);
//     }
//     catch(e){
//         console.log(e);
//     }
// }
// createDocument();


//save data using create method
// const createDocument = async () => {
//     try {
//         const allData = await courseRecord.create([
//             {
//                 title: 'Node JS',
//                 cType: 'Back End',
//                 noVideos: 23,
//                 author: 'Richa Arora',
//                 active: true

//             },
//             {

//                 title: 'Express JS',
//                 cType: 'Back End',
//                 noVideos: 29,
//                 author: 'Richa Arora',
//                 active: true

//             },
//             {
//                 title: 'MongoDB',
//                 cType: 'Database',
//                 noVideos: 41,
//                 author: 'Richa Arora',
//                 active: true
//             }
//         ])
//     }
//     catch (e) {
//         console.log(e);
//     }
// }
// createDocument();




//read operations
// const getDocuments=async()=>{
    // const result=await courseRecord.find();
    // const result=await courseRecord.find({title:'React JS'});
    // const result=await courseRecord.find().select({title:1,_id:0});
    // const result=await courseRecord.find({noVideos:{$gt:34}});
    // const result=await courseRecord.find({noVideos:{$gt:34}}).select({title:1,_id:0});
    // const result=await courseRecord.find({noVideos:{$gt:34}}).select({title:1,_id:0}).sort({title:1});
    // const result=await courseRecord.find({noVideos:{$gt:34}}).count();
    // const result=await courseRecord.find().limit(1);
    // const result=await courseRecord.find().skip(1);
    // const result=await courseRecord.find().limit(3).skip(1);
    // const result=await courseRecord.find({title:/react JS/i});
    // const minVideo=await courseRecord.find().sort({noVideos:1}).limit(1);
    // const maxVideo=await courseRecord.find().sort({noVideos:-1}).limit(1);
    // console.log(maxVideo);
    // console.log(minVideo);
    // console.log(result);
// }
// getDocuments();



//update

const updateDocument=async(_id)=>{
    try{
        const result=await courseRecord.updateOne({_id},{
            $set:{noVideos:62}
        })
    }
    catch(e){
        console.log(e);
    }
}
updateDocument('664868953bc3a2de48b798d9')

