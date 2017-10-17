class Library {
    items:Array<Item> = [];

    constructor(){
        let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        let mobyDick = new Book("Moby Dick",new Author("Herman Malville"),"Drama","About a big fish");

        this.items.push(matrix);
        this.items.push(mobyDick);
    }

    static fromJSON(data: any) : Library {
        return null
    }

    publishItems():void{

        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }
}