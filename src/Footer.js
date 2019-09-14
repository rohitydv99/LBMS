import React from 'react';

 class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
            <div id="footer1">
            <div>
            <p id="about">About Us:</p>
            <p id="about1">Online Library Management System allows<br/>students to issue and return books online</p>
            </div>
            <div>
            <p id="follow">Follow Us:</p>
            <p id="img">
            <a href="https://www.facebook.com/profile.php?id=100008194186876" target="_blank"><img id="fb" src={require('./images/fb.jpeg')}/></a>
            <img id="tweet" src={require('./images/twitter.jpg')}/>
            <a href="https://www.linkedin.com/in/rohit-yadav-23134717a/" target="_blank"><img id="lkdin" src={require('./images/linkedin.jpg')}/></a>
            </p>
            </div>
            </div>
            <p id="copyright">Copyright &copy; 2019-2020</p>
            </div>
        )
    }
}

export default Footer;
