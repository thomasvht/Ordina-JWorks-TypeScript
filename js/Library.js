var Library = (function () {
    function Library(books, movies) {
        this.books = books;
        this.movies = movies;
        this.items = [];
        // let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        // let spiderman = new Movie("Spiderman", "action", "a kid bitten by a spider with crazy adventures", 10, "PG");
        // let mobyDick = new Book("Moby Dick",new Author("Herman Melville"),"Drama","About a big fish");
        //
        // this.items.push(matrix);
        // this.items.push(spiderman);
        // this.items.push(mobyDick);
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
    Library.prototype.publishItems = function () {
        var itemContainer = document.getElementById("items");
        this.items.forEach(function (item) { return item.render(itemContainer); });
    };
    return Library;
}());
//# sourceMappingURL=Library.js.map