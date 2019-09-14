import React from 'react'

 class IssueBook extends React.Component {
    render() {
        return (
            <div id="issueBooks">
            <img id="cross2" src={require('./images/cross.jpg')}/>
            <h1 id="issue">Issue Book</h1>
            <center>
            <table id="issueTable">
            <tr>
            <td>
            <label> Student Enrollment No.</label>
            </td>
            <td>
            <input type="text" id="issueEnrl"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Book Accession No.</label>
            </td>
            <td>
            <input type="text" id="issueAcc"/>
            </td>
            </tr>
            </table>
            <button class="btn btn-primary" type="button" id="issueBook">Issue Book</button>
            </center>    
            </div>
        )
    }
}

export default IssueBook
