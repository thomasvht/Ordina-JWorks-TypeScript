class Library {

    items:Array<Item>;
    static allMovies: Array<Item> = [];
    static movies: Array<Item> = [];
    static allBooks: Array<Item> = [];
    static books: Array<Item> = [];

    constructor(public books: Array<Book>,public movies:Array<Movie>){
    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }

    static addMovie(): void {
        let r: number = Math.floor(Math.random() * Library.allMovies.length) + 1;
        let newMovie = new Movie("test", "test", "test", 10, "PG10");
        this.movies = (<Item[]>this.movies).concat(newMovie);

        let itemContainer: HTMLElement = document.getElementById("items");
        this.movies.forEach(item => item.render(itemContainer));
    }

    static addBook(): void {
         // console.log(Library.allBooks);
        let r: number = Math.floor(Math.random() * Library.allBooks.length) + 1;
        let newBook = new Book("test", new Author("test"), "test", "test")
        this.books = (<Item[]>this.books).concat(newBook);

        let itemContainer: HTMLElement = document.getElementById("items");
        this.books.forEach(item => item.render(itemContainer));
    }
}