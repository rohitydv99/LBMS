import React from 'react';
import axios from 'axios';

 class Header extends React.Component {
     constructor(props){
         super(props)
         this.verifyToken=()=>{
             if(localStorage.getItem('token')!=undefined){
                 axios.post('/verifyToken',{'token':localStorage.getItem('token')})
                 .then((result)=>{
                     if(result.data.status=='valid'){
                         /*if(window.outerWidth<450){
                             document.getElementById('login1').style.display="none";
                             document.getElementById('login1').insertAdjacentHTML('afterend',`
                             <p id="wlcmAdmn2">${localStorage.getItem('aUname')}</p>`)
                         }*/
                        if(window.outerWidth>450){
                         document.getElementById('login').style.display="none";
                         /*document.getElementById('login').insertAdjacentHTML('afterend',`
                         <p id="wlcmAdmn">${localStorage.getItem('aUname')}</p>`)*/
                         document.getElementById('login').insertAdjacentHTML('afterend',`
                         <img id="wlcmAdmn" src=${require('./images/user.jpg')}/>`)
                         }
                         /*document.getElementById('login').insertAdjacentHTML('afterend',`
                         <img id="wlcmAdmn" src=${require('./images/user.jpg')}/>`)*/
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
            <div id="header">
                <img id="menu" src={require('./images/menu.jpg')}/>
                <img id="libImg" src={require('./images/libImg.jpg')}/>
                <input type="search" id="search" placeholder="Search Here"></input>
                <h4 id="home">Home</h4>
                <h4 id="login">Login</h4>
                <h4 id="books">Books</h4>
            </div>
        )
    }
}

export default Header;
