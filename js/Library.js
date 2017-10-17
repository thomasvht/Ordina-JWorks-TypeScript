var Library = (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
    }
    Library.fromJSON = function (data) {
        var books = data.books.map(function (val) { return Book.fromJSON(val); });
        var movies = data.movies.map(function (val) { return Movie.fromJSON(val); });
        return new Library(books, movies);
    };
    Library.prototype.getAll = function () {
        this.items = this.books.concat(this.movies);
        return this.items;
    };
    Library.addMovie = function () {
        var r = Math.floor(Math.random() * Library.allMovies.length) + 1;
        var newMovie = new Movie("test", "test", "test", 10, "PG10");
        this.movies = this.movies.concat(newMovie);
        var itemContainer = document.getElementById("items");
        this.movies.forEach(function (item) { return item.render(itemContainer); });
    };
    Library.addBook = function () {
        // console.log(Library.allBooks);
        var r = Math.floor(Math.random() * Library.allBooks.length) + 1;
        var newBook = new Book("test", new Author("test"), "test", "test");
        this.books = this.books.concat(newBook);
        var itemContainer = document.getElementById("items");
        this.books.forEach(function (item) { return item.render(itemContainer); });
    };
    Library.allMovies = [];
    Library.movies = [];
    Library.allBooks = [];
    Library.books = [];
    return Library;
}());
//# sourceMappingURL=Library.js.map