import React from 'react';
import axios from 'axios';

 class Middle extends React.Component {
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
    render() {
        return (
            <div id="middle">
            <div id="nav">
            <p id="student"><i class="fas fa-user-tie"></i>  Add Student</p>
            <p id="vStudent"><i class="fas fa-user-tie"></i>  View Students</p>
            <p id="aBook"><i class="fas fa-book-open"></i>  Add Book</p>
            <p id="sBook"><i class="fas fa-book-open"></i>  View Books</p>
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
            <p id="welcome">Welcome To Online Library<br/>Management System</p>
            <img id="libImg2" src={require('./images/libImg2.jpg')}/>
            </div>
        )
    }
}

export default Middle;
