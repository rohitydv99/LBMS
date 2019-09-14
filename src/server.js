const express= require('express');
const app= express();
app.enable('trust proxy');
app.use((req,res,next)=>{
  if(req.protocol=='https'){
    next();
  }else{
    res.redirect(`https://${req.hostname}`);
  }
})
const path=require('path');
app.use(express.static(path.join(__dirname,"../build")));
const server= require('http').createServer(app);
let bodyParser=require('body-parser');
let crypto = require('crypto-js');
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
app.use(bodyParser.json({limit:'50mb',extended:true}));
let mongoClient= require('mongodb').MongoClient;
var mongoUrl2="mongodb://localhost:27017/";
let admn=["Admin"];
let pass=["123456"];
const myKey="library";
app.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../build","index.html"));
  })
  
 var mongoUrl="mongodb+srv://rohit2:password2@cluster0-7jtcf.mongodb.net/test?retryWrites=true&w=majority"

// mongoClient.connect(mongoUrl2,(err,db)=>{
//     //if(err) throw err;
//     var dbo=db.db("testing");
//     dbo.collection("check").insertOne({EnrollmentNo:"12345678"},(err,r)=>{
//         console.log(r);
//         //console.log(r.EnrollmentNo);
//         if(err) throw err;
//         else if(r==null){
//             console.log("un-successfull");
//         }
//         else /*if(r.EnrollmentNo==req.body.stuEnrl)*/{
//             console.log("successfull");
//         }
        
//     })
// })


// let books={
//     'computerscience':{
//         "title":["Sumita Arora","Discrete Mathematics","Fundamentals Of Computing","Algorithms","Data Structure","Operating Systems","Compilers","C/C++","Python","Java","Software Engineering","DBMS","COA"]
//     },
//     'electronics':{
//         "title":["Digital Electronics","STLD","Electromagnetism","Communication Systems","Electronic Devices","Networks","Digital Fundamentals","Embedded Systems","Semiconductors","Signals","Discrete Mathematics","Automata","Matlab"]
//     },
//     'mechanics':{
//         "title":["Fundamentals of Mechanics","Fluid Mechanics","Newtons Laws","Solid Mechanics","Quantum Mechanics","Classical Mechanics","Engineering Mechanics","Wave Theory","Vector Mechanics","Theory of Machines","Higher Mechanics","Trigonometry","Calculus"]
//     },
//     'communication':{
//         "title":["Grammar","Vocabulary Building","Writing Skills","Personality Development","How To Talk","Effective Communication","Professional Communication","Reading Skills","Wren N Martin","TED Talks","Word Power Made Easy","Interview Tips","Public Speaking"]
//     },
//     'magazines':{
//         "title":["India Today","Pratiyogita Darpan","Readers Digest","Comics","Traveller","Champak","Forbes India","Business Today","IEEE Publications","Oxford University Press","MIT Press Journal","Outlook","Sportstar"]
//     }


// }




// mongoClient.connect(mongoUrl,(err,db)=>{
//       if(err) throw err;
//       var dbo=db.db("library")
//       dbo.collection("books").insertOne({'bk':books},(err,res)=>{
//         if(err) throw err;
//     })
// })




// app.post('/sendData',(req,res)=>{
//     res.send({'bk':books})
// })

// app.post('/sendData',(req,res)=>{
//     mongoClient.connect(mongoUrl,(err,db)=>{
//         if(err) throw err;
//         var dbo=db.db("library");
//         dbo.collection("books").findOne({},(err,result)=>{
//             res.send(result)
//         })
//     })
// })

app.post('/Login',(req,res)=>{
    if(req.body.aUname==admn[0] && req.body.aPass==pass[0]){
        var token=new Date().getDate()+myKey;
        var token2=crypto.SHA256(token).toString();
        /*console.log(token2)*/
        res.send({'token':token2})
    }
    else{
        res.send({'token':'invalid'})
    }
})

app.post('/verifyToken',(req,res)=>{
    var todaysToken=crypto.SHA256(new Date().getDate()+myKey);
    if(req.body.token==todaysToken){
        res.send({'status':'valid'})
    }
    else{
        res.send({'status':'invalid'})
    }
})


app.post('/addStudent',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        dbo.collection("studentData").findOne({EnrollmentNo:req.body.stuEnrl},(err,r)=>{
            //console.log(r);
            //console.log(r.EnrollmentNo);
            if(err) throw err;
            else if(r==null){
                dbo.collection("studentData").insertOne({EnrollmentNo:req.body.stuEnrl,Name:req.body.stuName,Course:req.body.stuCourse,Email:req.body.stuEmail,Phone:req.body.stuPhone},(err,result)=>{
                    if(err) throw err;
                    res.send({'status':'ok'})
                })
            }
            else /*if(r.EnrollmentNo==req.body.stuEnrl)*/{
                res.send({'status':'notOk'})
            }
            // else {
            //     dbo.collection("studentData").insertOne({EnrollmentNo:req.body.stuEnrl,Name:req.body.stuName,Course:req.body.stuCourse,Email:req.body.stuEmail,Phone:req.body.stuPhone},(err,result)=>{
            //         if(err) throw err;
            //         res.send({'status':'ok'})
            //     })
            // }
        })
    })
})


app.post('/addBooks',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        dbo.collection("bookData").findOne({isbnNo:req.body.bookISBN,AccessionNo:req.body.bookAcc},(err,r)=>{
            //console.log(r);
            if(err) throw err;
            else if(r==null){
                dbo.collection("bookData").insertOne({BookCategory:req.body.bookCategory,Title:req.body.bookTitle,isbnNo:req.body.bookISBN,Publisher:req.body.bookPub,Price:req.body.bookPrice,AccessionNo:req.body.bookAcc,Booked:"No"},(err,result)=>{
                    if(err) throw err;    
                    res.send({'status':'ok'})
                })
            }
            else /*if(r.isbnNo==req.body.bookISBN)*/{
                res.send({'status':'notOk'})
            }
            // else{
            //     dbo.collection("bookData").insertOne({Title:req.body.bookTitle,isbnNo:req.body.bookISBN,Publisher:req.body.bookPub,Price:req.body.bookPrice,AccessionNo:req.body.bookAcc,Booked:"No"},(err,result)=>{
            //         if(err) throw err;
            //         res.send({'status':'ok'})
            //     })
            // }
        })

    })
})

app.post('/issuedBooks',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        dbo.collection("studentData").findOne({EnrollmentNo:req.body.issueEnrl},(err,r)=>{
            //console.log(r);
            if(err) throw err;
            else if(r==null){
                res.send({'status':'stuNotExist'})
            }
            else if(r.EnrollmentNo==req.body.issueEnrl){
                dbo.collection("bookData").findOne({AccessionNo:req.body.issueAcc},(err,r)=>{
                    console.log(r);
                    if(err) throw err;
                    else if(r==null){
                        res.send({'status':'bookNotExist'})
                    }
                    else if(r.Booked=="Yes"){
                        res.send({'status':'alreadyBooked'})
                    }
                    else if(r.Booked=="No"){
                        dbo.collection("bookData").updateOne({AccessionNo:req.body.issueAcc},{$set:{Booked:"Yes"}},(err,r)=>{
                            console.log(r);
                            if (err) throw err;
                            else{
                                dbo.collection("bookIssued").insertOne({StudentEnrol:req.body.issueEnrl,BookAcc:req.body.issueAcc},(err,r)=>{
                                    if(err) throw err;
                                    res.send({'status':'booked'})
                                })
                            }
                        })
                    }
                })
            }
            
        })
        
    })
})


app.post('/returnedBooks',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        dbo.collection("bookIssued").findOne({StudentEnrol:req.body.returnEnrl,BookAcc:req.body.returnAcc},(err,r)=>{
            //console.log(r);
            if(err) throw err;
            else if(r==null){
                res.send({'status':'noBookIssued'})
            }
            else if(r.StudentEnrol==req.body.returnEnrl&&r.BookAcc==req.body.returnAcc){
                dbo.collection("bookData").updateOne({AccessionNo:req.body.returnAcc},{$set:{Booked:"No"}},(err,r)=>{
                    if (err) throw err;
                    else{
                        dbo.collection("bookIssued").deleteOne({StudentEnrol:req.body.returnEnrl,BookAcc:req.body.returnAcc},(err,r)=>{
                            if(err) throw err;
                            res.send({'status':'returned'})
                        })
                    }
                })
            }
        })
    })
})

app.post('/sendBooksData',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        // dbo.collection("bookData").findOne({},(err,r)=>{
        //     console.log(r);
        //     if(err) throw err;
        // })
        dbo.collection("bookData").find({}).toArray((err,r)=>{
            //console.log(r);
            if(err) throw err;
            res.send(r);
        })
    })
})
app.post('/sendStudentData',(req,res)=>{
    mongoClient.connect(mongoUrl,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("lib");
        dbo.collection("studentData").find({}).toArray((err,r)=>{
            //console.log(r);
            if(err) throw err;
            res.send(r);
        })
    })

})





server.listen(process.env.PORT||4000,(req,res)=>{
    console.log("Server is Listening ");
  })




