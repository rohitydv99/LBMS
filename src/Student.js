import React from 'react'

 class Student extends React.Component {
    render() {
        return (
            <div id="addStudent">
            <img id="cross2" src={require('./images/cross.jpg')}/>
            <h1 id="stu">Student Details</h1>
            <center>
            <table id="stuTable">
            <tr>
            <td>
            <label>Enrollment No.</label>
            </td>
            <td>
            <input type="text" id="stuEnrl"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Name</label>
            </td>
            <td>
            <input type="text" id="stuName"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Course</label>
            </td>
            <td>
            <input type="text" id="stuCourse"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Email Id</label>
            </td>
            <td>
            <input type="text" id="stuEmail"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Phone No.</label>
            </td>
            <td>
            <input type="text" id="stuPhone"/>
            </td>
            </tr>
            </table>
            <button class="btn btn-primary" type="button" id="addStu">Add Student</button>
            </center>  
            </div>
        )
    }
}

export default Student
