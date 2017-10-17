class Book extends Item {
    render(element: HTMLElement): void {
        throw new Error("Method not implemented.");
    }

    private _author: Author;


    constructor() {
        super();
    }

    get author(): Author {
        return this._author;
    }

    set author(value: Author) {
        this._author = value;
    }
}