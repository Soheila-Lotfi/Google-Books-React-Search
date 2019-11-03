# Google-Books-React-Search

### Overview

This is a React-based Google Books Search app. I utilized React lifecycle methods to query and display books based on user searches. 
I'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

### Instructions

* This application has 2 pages:

  * Search - User can search for books via the Google Books API and render them here. 
  User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book,
  saving it to the Mongo database.

  * Saved - Renders all books saved to the Mongo database.
  User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, 
  removing it from the Mongo database.


4. Books have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Creating `documents` in the `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

5. used react-bootstrap

6. Added the following Express routes for the app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. 
Make sure you have this _after_ all other routes are defined.

- - -

![image](https://user-images.githubusercontent.com/49765334/68086596-862a4500-fe1b-11e9-868a-225dca5545b4.png)
--------------------------------------------------------------------------------------------------------------------------
![image](https://user-images.githubusercontent.com/49765334/68086592-7a3e8300-fe1b-11e9-8ade-0f52797ae7c0.png)




