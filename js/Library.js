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
        var newMovie = new Movie("test", "test", "test", 15, "test");
        this.movies = this.movies.concat(newMovie);
        var itemContainer = document.getElementById("items");
        this.movies.forEach(function (item) { return item.render(itemContainer); });
    };
    Library.addBook = function () {
        var newBook = new Book("test", new Author("test"), "test", "test");
        this.books = this.books.concat(newBook);
        var itemContainer = document.getElementById("items");
        this.books.forEach(function (item) { return item.render(itemContainer); });
    };
    Library.movies = [];
    Library.books = [];
    return Library;
}());
//# sourceMappingURL=Library.js.map