import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const url = "mongodb://127.0.0.1:27017";
const dbName = "school";

const client = new MongoClient(url);

app.set('view engine', 'ejs');
app.get("/", async(req, res) => {
   await client.connect();
    console.log("✅ MongoDB Connected");

    const db = client.db(dbName);
    const collection = db.collection("student");

    const data = await collection.find({}).toArray();
    console.log(data);
    res.render("students", { students: data });
});

app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});


// import express from 'express';
// import { MongoClient } from 'mongodb';

// const app = express();

// const url = "mongodb://127.0.0.1:27017";
// const dbName = "school";

// const client = new MongoClient(url);

// async function dbConnection() {
//     await client.connect();
//     console.log("✅ MongoDB Connected");

//     const db = client.db(dbName);
//     const collection = db.collection("student");

//     const data = await collection.find({}).toArray();
//     console.log(data);
// }

// dbConnection();

// app.get("/", (req, res) => {
//     res.send("✅ Server working perfectly");
// });

// app.listen(3000, () => {
//     console.log("✅ Server running on http://localhost:3000");
// });

// const express = require('express');
// const userdata = require('./users.json'); // IMPORTANT: use ./ not /

// const app = express();

// app.get('/', (req, resp) => {
//   console.log(userdata);
//   resp.send(userdata);
// });
// app.get('/users:id', (req, resp) => {
//   const userId = req.params.id;
//   console.log(userId);
  
//   let filterdata = userdata.filter((user) => user.id == userId);
//   resp.send(filterdata);
// })

// app.listen(3400, () => {
//   console.log("Server running on http://localhost:3400");
// });


// app.set('view engine', 'ejs');
// app.get('/user', (req, resp) => {
//   resp.render('user');
// });

// app.listen(3400, () => {
//   console.log("Server running on http://localhost:3400");
// });


// const express = require('express');

// const app = express();
// app.use(express.urlencoded({ extended: false }));

// app.set('view engine', 'ejs');
// app.get('/', (req, resp) => {
//       resp.render('addUser')
// });

// app.post('/addUser',(req, resp)=>{
//   console.log(req.body);

//   resp.render('SubmitUser',req.body)
// });
// app.listen(8800, () => {
//     console.log("Server running on http://localhost:8800");
// });



// const express = require('express');

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, resp) => {
//     resp.render('home.ejs');
// });

// app.listen(5600, () => {
//     console.log("Server running on http://localhost:5600");
// });


// const express = require('express');
// const app = express();
// app.get('/', (req, resp) => {
//   resp.send('Home Page');
// });

// app.get('/about', (req, resp) => {
//   resp.send('About Page');
// });

// app.get("/login",(req, resp)=>{
//   resp.send(``);
// })
// app.post("/login",(req,resp)=>{
//   resp.send("Login successful");
// })
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

