class Library {

    items:Array<Item>;
    static movies: Array<Item> = [];
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
        let newMovie = new Movie("test", "test", "test", 15, "test");
        this.movies = (<Item[]>this.movies).concat(newMovie);

        let itemContainer: HTMLElement = document.getElementById("items");
        this.movies.forEach(item => item.render(itemContainer));
    }

    static addBook(): void {
        let newBook = new Book("test", new Author("test"), "test", "test");
        this.books = (<Item[]>this.books).concat(newBook);

        let itemContainer: HTMLElement = document.getElementById("items");
        this.books.forEach(item => item.render(itemContainer));
    }
}