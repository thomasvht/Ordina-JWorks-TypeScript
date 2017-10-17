class Library {
    items:Array<Item> = [];

    constructor(public books: Array<Book>,public movies:Array<Movie>){
        // let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        // let spiderman = new Movie("Spiderman", "action", "a kid bitten by a spider with crazy adventures", 10, "PG");
        // let mobyDick = new Book("Moby Dick",new Author("Herman Melville"),"Drama","About a big fish");
        //
        // this.items.push(matrix);
        // this.items.push(spiderman);
        // this.items.push(mobyDick);
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

    publishItems():void{

        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }
}