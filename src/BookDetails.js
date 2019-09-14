import React from 'react'

 class BookDetails extends React.Component {
    render() {
        return (
            <div id="bookDetails">
            <img id="cross2" src={require('./images/cross.jpg')}/>
            <h1 id="book">Book Details</h1>
            <center>
            <table id="bookTable">
            <tr>
            <td>
            <label>Book Category</label>
            </td>
            <td>
            <input type="text" id="bookCategory"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Book Title</label>
            </td>
            <td>
            <input type="text" id="bookTitle"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>ISBN No.</label>
            </td>
            <td>
            <input type="text" id="bookISBN"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Publisher</label>
            </td>
            <input type="text" id="bookPub"/>
            </tr>
            <tr>
            <td>
            <label>Price</label>
            </td>
            <td>
            <input type="text" id="bookPrice"/>
            </td>
            </tr>
            <tr>
            <td>
            <label>Accession No.</label>
            </td>
            <td>
            <input type="text" id="bookAcc"/>
            </td>
            </tr>
            </table>
            <button class="btn btn-primary" type="button" id="addBook">Add Book</button>
            </center>   
            </div>
        )
    }
}

export default BookDetails
