
import axios from "axios";


export default {

    // get all the saved books
    getSavedBooks: function () {

        return axios.get("/api/books")
    },

    // save a book in database
    saveBook: function (bookData) {

        return axios.post("/api/books/", bookData)
    },

    // Delete a book in database
    deleteBook: function (id) {

        return axios.delete("/api/books/" + id)
    },

    // get books from google books api

    getBooks: function (query) {

        const apiKey = "AIzaSyCQXR6pRZa0fJtaIZXZZONpeqMJPxidZX4";
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "+intitle:" + query + "&key=" + apiKey + "";

        return axios.get(url);
    }



}