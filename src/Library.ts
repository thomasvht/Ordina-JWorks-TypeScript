class Library {
    items:Array<Item> = [];

    constructor(){
        let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        let spiderman = new Movie("Spiderman", "action", "about a kid bitten by a spider and get super powers", 16, "PG");
        let mobyDick = new Book("Moby Dick",new Author("Herman Melville"),"Drama","About a big fish");

        this.items.push(matrix);
        this.items.push(spiderman);
        this.items.push(mobyDick);
    }

    publishItems():void{
        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }
}