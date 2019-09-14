import React from 'react';
import axios from 'axios';

class Books extends React.Component {
    constructor(props){
        super(props)
        this.verifyToken=()=>{
            if(localStorage.getItem('token')!=undefined){
                axios.post('/verifyToken',{'token':localStorage.getItem('token')})
                .then((result)=>{
                    if(result.data.status=='valid'){
                        if(window.outerWidth<450){
                            document.getElementById('login1').style.display="none";
                            /*document.getElementById('login1').insertAdjacentHTML('afterend',`
                            <p id="wlcmAdmn2">${localStorage.getItem('aUname')}</p>`)*/
                            document.getElementById('login1').insertAdjacentHTML('afterend',`
                            <p id="wlcmAdmn3"><img id="wlcmAdmn2" src=${require('./images/user.jpg')}/></p>`)
                        }
                       /* else if(window.outerWidth>450){
                        document.getElementById('login').style.display="none";
                        document.getElementById('login').insertAdjacentHTML('afterend',`
                        <p id="wlcmAdmn">${localStorage.getItem('aUname')}</p>`)
                        }*/
                    }
                    else{
                        localStorage.removeItem('token');
                        localStorage.removeItem('aUname');
                        alert("Your session has expired!Please login again");

                    }
                })
                .catch((error)=>{
                    alert("Something has went wrong");
                })

            }
        }
    }
    componentDidMount(){
        this.verifyToken();
    }
    // constructor(props){
    //     super(props)
    //     document.addEventListener("click",(e)=>{
    //         if(e.target.id=="books"){
    //             document.getElementById('welcome').style.display="none";
    //             ReactDOM.render(<Books/>,document.getElementById('middle'));
    //         }
    //         axios.post('http://localhost:8080/http://localhost:4000/sendData')
    //         .then((result)=>{
    //             document.getElementById('csBooks').insertAdjacentHTML('beforeend',`
    //             <li id="title">

    //             </li>`)

    //         })
    //     })
    // }
    render() {
        return (
            <div id="booksData">
            <div id="cs">
            <p id="cs1">Computer Science</p>
            <ul id="csBooks">
            <div id="load"></div>
            </ul>
            </div>
            <div id="elc">
            <p id="elc1">Electronics</p>
            <ul id="elcBooks">
            <div id="load"></div>
            </ul>
            </div>
            <div id="mec">
            <p id="mec1">Mechanics</p>
            <ul id="mecBooks">
            <div id="load"></div>
            </ul>
            </div>
            <div id="comm">
            <p id="comm1">Communication Skills</p>
            <ul id="commBooks">
            <div id="load"></div>
            </ul>
            </div>
            <div id="mag">
            <p id="mag1">Magazines/Journals</p>
            <ul id="magBooks">
            <div id="load"></div>
            </ul>
            </div>
            <div id="nav">
            <p id="student"><i class="fas fa-user-tie"></i>  Add Student</p>
            <p id="vStudent"><i class="fas fa-user-tie"></i>  View Students</p>
            <p id="aBook"><i class="fas fa-book-open"></i>  Add Book</p>
            <p id="sBook"><i class="fas fa-book-open"></i>  Show Books</p>
            <p id="iBook"><i class="fas fa-book-reader"></i>  Issue Book</p>
            <p id="rBook"><i class="fas fa-book"></i>  Return Book</p>
            <p id="logout"><i class="fas fa-sign-out-alt"></i>  Logout</p>
            </div>
            <div id="menuBar">
            <div id="menuButton">
            <p id="closebtn">&times;</p>
            <p id="home1">Home</p>
            <p id="login1">Login</p>
            <p id="books1">Books</p>
            </div>
            <div id="nav1">
            <p id="student1"><i class="fas fa-user-tie"></i>  Add Student</p>
            <p id="vStudent1"><i class="fas fa-user-tie"></i>  View Students</p>
            <p id="aBook1"><i class="fas fa-book-open"></i>  Add Book</p>
            <p id="sBook1"><i class="fas fa-book-open"></i>  View Books</p>
            <p id="iBook1"><i class="fas fa-book-reader"></i>  Issue Book</p>
            <p id="rBook1"><i class="fas fa-book"></i>  Return Book</p>
            <p id="logout1"><i class="fas fa-sign-out-alt"></i>  Logout</p>
            </div>
            <div id="menuBooks">
            <p id="menuCS">Computer Science</p>
            <p id="menuEL">Electronics</p>
            <p id="menuME">Mechanics</p>
            <p id="menuCMM">Communication Skills</p>
            <p id="menuMG">Magazines/Journals</p>
            </div>
            </div>
            </div>
        )
    }
}

export default Books;
