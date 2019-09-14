import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

class App extends React.Component {
 render(){
   return(
     <div id="container">
        <Header/>
        <Middle/>
        <Footer/>
     </div>
   );
 }
}
export default App;
