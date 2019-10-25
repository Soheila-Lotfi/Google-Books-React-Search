
import axios from "axios";


export default {

    // get all the books
    getBooks: function () {

        return axios.get("/api/books")
    },

    // save a book in database
    saveBook: function (bookData) {

        return axios.post("/api/books/", bookData)
    },

    // Delete a book in database
    deleteBook: function (id) {

        return axios.delete("/api/books/" + id)
    }


}