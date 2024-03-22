require('dotenv').config()
const express = require('express');
let app = express();
let per = require('./routes/app')
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use('/', per);

// for demo try

app.listen(process.env.PORT, () => {
    require('./db')
    console.log(`server connected on ${process.env.PORT}`);
})

                                                                         





// app.post('/department', async (req, res) => {
//     try {
//         const data = req.body;

//         const newdepart = new department(data);

//         const responce = await newdepart.save();
//         console.log("data saved");
//         res.status(200).json(responce);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });

//     }
// })


// join query in mongodb

// app.get('/perdep', async (req, res) => {
//     try {
//         const data = await department.aggregate([
//             {
//                 $lookup: {
//                     from: 'personexamplas',
//                     localField: '_id',
//                     foreignField: 'dept',
//                     as: 'fulldetail'
//                 }
//             }
//         ]);
//         console.log("data saved");
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });

//     }
// })




// refrenece in mongodb(foreign key)

// app.get('/person', async (req, res, next) => {
//     try {
//         // const data = await person.find().populate('dept dep2','name',{
//         const data = await person.find().populate({
//             path: 'dept',
//             select: 'name'
//         });

//         console.log("data saved");
//         res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })









