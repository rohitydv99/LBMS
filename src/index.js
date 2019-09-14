import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Middle from './Middle';
import Books from './Books';
import axios from 'axios';
import Login from './Login';
import Student from './Student';
import BookDetails from './BookDetails';
import IssueBook from './IssueBook';
import ReturnBook from './ReturnBook';
import ShowBook from './ShowBook';
import BookInfo from './BookInfo';
import ViewStudent from './ViewStudent';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
var i=0;
var j=0;
var k=0;
var m=0;
document.addEventListener("click",(e)=>{
    if(e.target.id=="books"){
        /*document.getElementById('welcome').style.display="none";*/
        /*document.getElementById('middle').style.margin="0px";*/
        ReactDOM.render(<Books/>,document.getElementById('middle'));

        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Computer Science"){
                    document.getElementById('csBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
                else if(result.data[i].BookCategory=="Electronics"){
                    document.getElementById('elcBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
                else if(result.data[i].BookCategory=="Mechanics"){
                    document.getElementById('mecBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
                else if(result.data[i].BookCategory=="Communication Skills"){
                    document.getElementById('commBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
                else if(result.data[i].BookCategory=="Magazines"){
                    document.getElementById('magBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("OOPS!!Cannot fetch data");
        })
    }
    //     axios.post('http://localhost:8080/http://localhost:4000/sendData')
    //     .then((result)=>{
    //         document.getElementById('csBooks').innerHTML="";
            
    //         for(var i=0;i<13;i++){
    //         document.getElementById('csBooks').insertAdjacentHTML('beforeend',`
    //         <li id="title">
    //         ${result.data.bk.computerscience.title[i]}
    //         </li>`)
    //         }
    //         document.getElementById('elcBooks').innerHTML="";
    //         for(var i=0;i<13;i++){
    //             document.getElementById('elcBooks').insertAdjacentHTML('beforeend',`
    //             <li id="title">
    //             ${result.data.bk.electronics.title[i]}
    //             </li>`)
    //         }
    //         document.getElementById('mecBooks').innerHTML="";
    //         for(var i=0;i<13;i++){
    //             document.getElementById('mecBooks').insertAdjacentHTML('beforeend',`
    //             <li id="title">
    //             ${result.data.bk.mechanics.title[i]}
    //             </li>`)
    //         }
    //         document.getElementById('commBooks').innerHTML="";
    //         for(var i=0;i<13;i++){
    //             document.getElementById('commBooks').insertAdjacentHTML('beforeend',`
    //             <li id="title">
    //             ${result.data.bk.communication.title[i]}
    //             </li>`)
    //         }
    //         document.getElementById('magBooks').innerHTML="";
    //         for(var i=0;i<13;i++){
    //             document.getElementById('magBooks').insertAdjacentHTML('beforeend',`
    //             <li id="title">
    //             ${result.data.bk.magazines.title[i]}
    //             </li>`)
    //         }
    //     })
    //     .catch((error)=>{
    //         alert("OOPS!!Cannot fetch data");
    //     })
     
    
    else if(e.target.id=="home"||e.target.id=="libImg"){
        ReactDOM.render(<Middle/>,document.getElementById('middle'));
        document.getElementById('welcome').style.display="block";
    }
    else if(e.target.id=="login"){
        document.getElementById('transparentBack').style.display="block";
        document.getElementById('dyna').style.display="block";
        ReactDOM.render(<Login/>,document.getElementById('dyna'));
    }
    else if(e.target.id=="transparentBack"){
        document.getElementById('transparentBack').style.display="none";
        document.getElementById('dyna').style.display="none";
    }
    // else if(e.target.id=="title"){
    //     document.getElementById('dyna').style.display="block";
    //     ReactDOM.render(<BookInfo/>,document.getElementById('dyna'));
    //     var bkTitle=e.target.textContent;
    //     axios.post('http://localhost:8080/http://localhost:4000/sendBooksData')
    //     .then((result)=>{
    //         for(var i=0;i<result.data.length;i++){
    //             if(result.data[i].Title==bkTitle){
    //                 document.getElementById('bookInfo2').insertAdjacentHTML('beforeend',`
    //                 <li id="title2">
    //                 ${result.data[i].BookCategory}
    //                 </li>`)
    //             }
    //         }
    //     })
    // }
    else if(e.target.id=="cross"){
        document.getElementById('transparentBack').style.display="none";
        document.getElementById('dyna').style.display="none";
    }
    else if(e.target.id=="cross3"){
        document.getElementById('dyna').style.display="none";
    }
    else if(e.target.id=="student"){
        document.getElementById('dyna2').style.width="30vw";
        document.getElementById('dyna2').style.left="35%";
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<Student/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="aBook"){
        document.getElementById('dyna2').style.width="30vw";
        document.getElementById('dyna2').style.left="35%";
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<BookDetails/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="sBook"){
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        document.getElementById('dyna2').style.width="50vw";
        document.getElementById('dyna2').style.left="25%";
        ReactDOM.render(<ShowBook/>,document.getElementById('dyna2'));
        axios.post('/sendBooksData')
        .then((result)=>{
            console.log(result);
            // for(var i=0;i<3;i++){
            //     console.log(result.data[i])
            // }
            // console.log(result.data['0']);
            document.getElementById('showTbl').innerHTML="";
             for(var i=0;i<result.data.length;i++){
            document.getElementById("showTbl").insertAdjacentHTML('beforeend',`
            <table id="showTable">
            <tr>
            <th>Book Category</th>
            <th>Book Title</th>
            <th>ISBN No.</th>
            <th>Publisher</th>
            <th>Accession No.</th>
            <th>Price</th>
            <th>Booked Status</th>
            </tr>
            <tr>
            <td>${result.data[i].BookCategory}</td>
            <td>${result.data[i].Title}</td>
            <td>${result.data[i].isbnNo}</td>
            <td>${result.data[i].Publisher}</td>
            <td>${result.data[i].AccessionNo}</td>
            <td>${result.data[i].Price}</td>
            <td>${result.data[i].Booked}</td>
            </tr>
            </table>`)
          } 

        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="vStudent"){
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        document.getElementById('dyna2').style.width="50vw";
        document.getElementById('dyna2').style.left="25%";
        ReactDOM.render(<ViewStudent/>,document.getElementById('dyna2'));
        axios.post('/sendStudentData')
        .then((result)=>{
            console.log(result);
            // for(var i=0;i<3;i++){
            //     console.log(result.data[i])
            // }
            // console.log(result.data['0']);
            document.getElementById('showTbl').innerHTML="";
             for(var i=0;i<result.data.length;i++){
            document.getElementById("showTbl").insertAdjacentHTML('beforeend',`
            <table id="showTable">
            <tr>
            <th>Enrollment No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email Id</th>
            <th>Phone No.</th>
            </tr>
            <tr>
            <td>${result.data[i].EnrollmentNo}</td>
            <td>${result.data[i].Name}</td>
            <td>${result.data[i].Course}</td>
            <td>${result.data[i].Email}</td>
            <td>${result.data[i].Phone}</td>
            </tr>
            </table>`)
            }   
        })
        .catch((error)=>{
            alert("Cannnot fetch data");
        })
    }
    else if(e.target.id=="iBook"){
        document.getElementById('dyna2').style.width="30vw";
        document.getElementById('dyna2').style.left="35%";
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<IssueBook/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="rBook"){
        document.getElementById('dyna2').style.width="30vw";
        document.getElementById('dyna2').style.left="35%";
        document.getElementById('nav').style.display="none";
        i--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<ReturnBook/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="cross2"){
        document.getElementById('dyna2').style.display="none";
    }
    else if(e.target.id=="aLogin"){
        var aUname=document.getElementById('aUname').value;
        var aPass=document.getElementById('aPass').value;
        if(aUname==""||aPass==""){
            alert("Please fill all fields")
            /*window.location.reload();*/
        }
        else{
        axios.post('/Login',({'aUname':aUname,'aPass':aPass}))
        .then((result)=>{
            if(result.data.token=='invalid'){
                alert("Please enter correct username and password");
                window.location.reload();
            }
            else{
                localStorage.setItem('token',result.data.token);
                localStorage.setItem('aUname',aUname);
                window.location.reload();
            }
        })
        }
    }
    else if(e.target.id=="wlcmAdmn"){
        if(i==0){
            document.getElementById('nav').style.display="block";
            i++;
        }
        else if(i==1){
            document.getElementById('nav').style.display="none";
            i--;
        }
    }
    else if(e.target.id=="logout"){
        localStorage.removeItem('token');
        localStorage.removeItem('aUname');
        window.location.reload();
    }
    else if(e.target.id=="addStu"){
        var stuEnrl=document.getElementById('stuEnrl').value;
        var stuName=document.getElementById('stuName').value;
        var stuCourse=document.getElementById('stuCourse').value;
        var stuEmail=document.getElementById('stuEmail').value;
        var stuPhone=document.getElementById('stuPhone').value;
        if(stuEnrl==""||stuName==""||stuCourse==""||stuEmail==""||stuPhone==""){
            alert("Please fill all details");
        }
        else if(isNaN(stuEnrl)||stuEnrl.length<11||stuEnrl.length>11){
            alert("Please enter valid enrollment no. of 11 digits");
        }
        else if(isNaN(stuPhone)||stuPhone.length<10||stuPhone.length>10){
            alert("Please enter valid phone no. of 10 digits");
        }
        else{
            axios.post('/addStudent',({'stuEnrl':stuEnrl,'stuName':stuName,'stuCourse':stuCourse,'stuEmail':stuEmail,'stuPhone':stuPhone}))
            .then((result)=>{
                if(result.data.status=="ok"){
                    alert("Student added successfully");
                    window.location.reload();
                }
                else if(result.data.status=="notOk"){
                    alert("Student already exists with this enrollment no.");
                    window.location.reload();
                }
            })
            .catch((error)=>{
                alert("Something went wrong");
            })
        }
    }
    else if(e.target.id=="addBook"){
        var bookCategory=document.getElementById('bookCategory').value;
        var bookTitle=document.getElementById('bookTitle').value;
        var bookISBN=document.getElementById('bookISBN').value;
        var bookPub=document.getElementById('bookPub').value;
        var bookPrice=document.getElementById('bookPrice').value;
        var bookAcc=document.getElementById('bookAcc').value;
        if(bookCategory==""||bookTitle==""||bookISBN==""||bookPub==""||bookPrice==""||bookAcc==""){
            alert("Please fill all fields");
        }
        else if(bookCategory!="Computer Science"&&bookCategory!="Electronics"&&bookCategory!="Mechanics"&&bookCategory!="Communication Skills"&&bookCategory!="Magazines"){
            alert("Please enter correct book category");
        }
        else if(isNaN(bookPrice)){
            alert("Please enter valid price of book");
        }
        else if(isNaN(bookISBN)||bookISBN.length<8||bookISBN.length>8){
            alert("ISBN No should be digits only and 8 digits long")
        }
        else if(isNaN(bookAcc)||bookAcc.length<5||bookAcc.length>5){
            alert("Acc No should be digits only and 5 digits long")
        }
        else{
            axios.post('/addBooks',({'bookCategory':bookCategory,'bookTitle':bookTitle,'bookISBN':bookISBN,'bookPub':bookPub,'bookPrice':bookPrice,'bookAcc':bookAcc}))
            .then((result)=>{
                if(result.data.status=="notOk"){
                    alert("Book with this ISBN No. and Acc No. is already added");
                    window.location.reload();
                }
                else if(result.data.status=="ok"){
                    alert("Book added successfully");
                    window.location.reload();
                }
            })
            .catch((error)=>{
                alert("Something went wrong");
            })
        }
    }
    else if(e.target.id=="issueBook"){
        var issueEnrl=document.getElementById('issueEnrl').value;
        var issueAcc=document.getElementById('issueAcc').value;
        if(issueEnrl==""||issueAcc==""){
            alert("Please fill all details");
        }
        else if(isNaN(issueEnrl)||issueEnrl.length<11||issueEnrl.length>11){
            alert("Please enter valid enrollment no of 11 digits");
        }
        else if(isNaN(issueAcc)||issueAcc.length<5||issueAcc.length>5){
            alert("Please enter valid Acc No. of 5 digits");
        }
        else{
            axios.post('/issuedBooks',({'issueEnrl':issueEnrl,'issueAcc':issueAcc}))
            .then((result)=>{
                if(result.data.status=="stuNotExist"){
                    alert("No student exist with this enrollment no.");
                }
                else if(result.data.status=="bookNotExist"){
                    alert("Book with entered accession no doesn't exist");
                }
                else if(result.data.status=="alreadyBooked"){
                    alert("This book is already issued");
                    window.location.reload();
                }
                else if(result.data.status=="booked"){
                    alert("Book Issued successfully");
                    window.location.reload();
                }
            })
            .catch((error)=>{
                alert("Something has went wrong");
            })
        }
    }
    else if(e.target.id=="returnBook"){
        var returnEnrl=document.getElementById('returnEnrl').value;
        var returnAcc=document.getElementById('returnAcc').value;
        if(returnEnrl==""||returnAcc==""){
            alert("Please fill all fields")
        }
        else if(isNaN(returnEnrl)||returnEnrl.length<11||returnEnrl.length>11){
            alert("Please enter valid enrollment no of 11 digits");
        }
        else if(isNaN(returnAcc)||returnAcc.length<5||returnAcc.length>5){
            alert("Please enter valid Acc No. of 5 digits");
        }
        else{
            axios.post('/returnedBooks',({'returnEnrl':returnEnrl,'returnAcc':returnAcc}))
            .then((result)=>{
                if(result.data.status=="noBookIssued"){
                    alert("Entered details doesn't match");
                }
                else if(result.data.status=="returned"){
                    alert("Book Returned Successfully");
                    window.location.reload();
                }
            })
            .catch((error)=>{
                alert("Something has went wrong");
            })
        }
    }











    //Mobile View Javascript
    else if(e.target.id=="menu"){
        if(j==0){
        document.getElementById('menuBar').style.display="block";
        document.getElementById('menuButton').style.display="block";
        document.getElementById('menuBar').style.width="60vw";
        j++;
        }
        else if(j==1){
            document.getElementById('menuBar').style.width="0vw";
            document.getElementById('menuButton').style.display="none";
            j--;
        }
    }
    else if(e.target.id=="closebtn"){
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
    }
    else if(e.target.id=="books1"){
        if(k==0){
            document.getElementById('menuBooks').style.display="block";
            k++;
        }
        else if(k==1){
            document.getElementById('menuBooks').style.display="none";
            k--;
        }
    }
    else if(e.target.id=="menuCS"&& window.outerWidth <450){
        j--;
        k--;
        document.getElementById('menuBooks').style.display="none";
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        ReactDOM.render(<Books/>,document.getElementById('middle'))
        document.getElementById('elc').style.display="none";
        document.getElementById('elcBooks').style.display="none";
        document.getElementById('mec').style.display="none";
        document.getElementById('mecBooks').style.display="none";
        document.getElementById('comm').style.display="none";
        document.getElementById('commBooks').style.display="none";
        document.getElementById('mag').style.display="none";
        document.getElementById('magBooks').style.display="none";
        document.getElementById('cs').style.display="block";
        document.getElementById('csBooks').style.display="block";
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Computer Science"){
                    document.getElementById('csBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="menuEL"&& window.outerWidth <450){
        j--;
        k--;
        document.getElementById('menuBooks').style.display="none";
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        ReactDOM.render(<Books/>,document.getElementById('middle'))
        document.getElementById('cs').style.display="none";
        document.getElementById('csBooks').style.display="none";
        document.getElementById('mec').style.display="none";
        document.getElementById('mecBooks').style.display="none";
        document.getElementById('comm').style.display="none";
        document.getElementById('commBooks').style.display="none";
        document.getElementById('mag').style.display="none";
        document.getElementById('magBooks').style.display="none";
        document.getElementById('elc').style.display="block";
        document.getElementById('elcBooks').style.display="block";
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Electronics"){
                    document.getElementById('elcBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="menuME"&& window.outerWidth <450){
        j--;
        k--;
        document.getElementById('menuBooks').style.display="none";
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        ReactDOM.render(<Books/>,document.getElementById('middle'))
        document.getElementById('cs').style.display="none";
        document.getElementById('csBooks').style.display="none";
        document.getElementById('elc').style.display="none";
        document.getElementById('elcBooks').style.display="none";
        document.getElementById('comm').style.display="none";
        document.getElementById('commBooks').style.display="none";
        document.getElementById('mag').style.display="none";
        document.getElementById('magBooks').style.display="none";
        document.getElementById('mec').style.display="block";
        document.getElementById('mecBooks').style.display="block";
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Mechanics"){
                    document.getElementById('mecBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="menuCMM"&& window.outerWidth <450){
        j--;
        k--;
        document.getElementById('menuBooks').style.display="none";
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        ReactDOM.render(<Books/>,document.getElementById('middle'))
        document.getElementById('cs').style.display="none";
        document.getElementById('csBooks').style.display="none";
        document.getElementById('elc').style.display="none";
        document.getElementById('elcBooks').style.display="none";
        document.getElementById('mec').style.display="none";
        document.getElementById('mecBooks').style.display="none";
        document.getElementById('mag').style.display="none";
        document.getElementById('magBooks').style.display="none";
        document.getElementById('comm').style.display="block";
        document.getElementById('commBooks').style.display="block";
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Communication Skills"){
                    document.getElementById('commBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="menuMG"&& window.outerWidth <450){
        j--;
        k--;
        document.getElementById('menuBooks').style.display="none";
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        ReactDOM.render(<Books/>,document.getElementById('middle'))
        document.getElementById('cs').style.display="none";
        document.getElementById('csBooks').style.display="none";
        document.getElementById('elc').style.display="none";
        document.getElementById('elcBooks').style.display="none";
        document.getElementById('mec').style.display="none";
        document.getElementById('mecBooks').style.display="none";
        document.getElementById('comm').style.display="none";
        document.getElementById('commBooks').style.display="none";
        document.getElementById('mag').style.display="block";
        document.getElementById('magBooks').style.display="block";
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('csBooks').innerHTML="";
            document.getElementById('elcBooks').innerHTML="";
            document.getElementById('mecBooks').innerHTML="";
            document.getElementById('commBooks').innerHTML="";
            document.getElementById('magBooks').innerHTML="";
            for(var i=0;i<result.data.length;i++){
                if(result.data[i].BookCategory=="Magazines"){
                    document.getElementById('magBooks').insertAdjacentHTML('beforeend',`
                    <li id="title">
                    ${result.data[i].Title}
                    </li>`)
                }
            }
        })
        .catch((error)=>{
            alert("Cannot fetch data");
        })
    }
    else if(e.target.id=="home1"){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        ReactDOM.render(<Middle/>,document.getElementById('middle'));
    }
    else if(e.target.id=="login1"&&window.outerWidth <450){
        j--;
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        document.getElementById('transparentBack').style.display="block";
        document.getElementById('dyna').style.display="block";
        ReactDOM.render(<Login/>,document.getElementById('dyna'));
    }
    else if(e.target.id=="wlcmAdmn2"&&window.outerWidth<450){
        if(m==0){
            document.getElementById('nav1').style.display="block";
            m++;
        }
        else if(m==1){
            document.getElementById('nav1').style.display="none";
            m--;
        }
    }
    else if(e.target.id=="student1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('nav1').style.display="none";
        m--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<Student/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="aBook1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('nav1').style.display="none";
        m--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<BookDetails/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="sBook1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('nav1').style.display="none";
        m--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<ShowBook/>,document.getElementById('dyna2'));
        axios.post('/sendBooksData')
        .then((result)=>{
            document.getElementById('showTbl').innerHTML="";
             for(var i=0;i<result.data.length;i++){
            document.getElementById("showTbl").insertAdjacentHTML('beforeend',`
            <table id="showTable">
            <tr>
            <th>Book Category</th>
            <th>Book Title</th>
            <th>ISBN No.</th>
            <th>Publisher</th>
            <th>Accession No.</th>
            <th>Price</th>
            <th>Booked Status</th>
            </tr>
            <tr>
            <td>${result.data[i].BookCategory}</td>
            <td>${result.data[i].Title}</td>
            <td>${result.data[i].isbnNo}</td>
            <td>${result.data[i].Publisher}</td>
            <td>${result.data[i].AccessionNo}</td>
            <td>${result.data[i].Price}</td>
            <td>${result.data[i].Booked}</td>
            </tr>
            </table>`)
             }    
        })
        .catch((error)=>{
            alert("Cannot fetch data")
        })
    }
    else if(e.target.id=="vStudent1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('dyna2').style.display="block";
        document.getElementById('nav1').style.display="none";
        m--;
        ReactDOM.render(<ViewStudent/>,document.getElementById('dyna2'));
        axios.post('/sendStudentData')
        .then((result)=>{
            document.getElementById('showTbl').innerHTML="";
             for(var i=0;i<result.data.length;i++){
            document.getElementById("showTbl").insertAdjacentHTML('beforeend',`
            <table id="showTable">
            <tr>
            <th>Enrollment No.</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email Id</th>
            <th>Phone No.</th>
            </tr>
            <tr>
            <td>${result.data[i].EnrollmentNo}</td>
            <td>${result.data[i].Name}</td>
            <td>${result.data[i].Course}</td>
            <td>${result.data[i].Email}</td>
            <td>${result.data[i].Phone}</td>
            </tr>
            </table>`)
            }   
        })
        .catch((error)=>{
            alert("Cannnot fetch data");
        })
    }
    else if(e.target.id=="iBook1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('nav1').style.display="none";
        m--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<IssueBook/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="rBook1"&&window.outerWidth<450){
        /*document.getElementById('menuBar').style.display="none";*/
        document.getElementById('menuBar').style.width="0vw";
        document.getElementById('menuButton').style.display="none";
        j--;
        document.getElementById('dyna2').style.width="100vw";
        document.getElementById('nav1').style.display="none";
        m--;
        document.getElementById('dyna2').style.display="block";
        ReactDOM.render(<ReturnBook/>,document.getElementById('dyna2'));
    }
    else if(e.target.id=="logout1"){
        localStorage.removeItem('token');
        localStorage.removeItem('aUname');
        window.location.reload();
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
