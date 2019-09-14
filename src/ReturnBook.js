import React from 'react'

 class ReturnBook extends React.Component {
    render() {
        return (
            <div id="returnBooks">
            <img id="cross2" src={require('./images/cross.jpg')}/>
            <h1 id="return">Return Book</h1>
            <center>
            <table id="returnTable">
            <tr>
            <td>
            <label> Student Enrollment No.</label>
            </td>
            <td>
            <input type="text" id="returnEnrl"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Book Accession No.</label>
            </td>
            <td>
            <input type="text" id="returnAcc"/>
            </td>
            </tr>
            </table>
            <button class="btn btn-primary" type="button" id="returnBook">Return Book</button>
            </center>
                
            </div>
        )
    }
}

export default ReturnBook
