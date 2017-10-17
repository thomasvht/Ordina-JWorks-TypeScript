class Book extends Item {
    render(element: HTMLElement): void {
        element.innerHTML = `
        <article>
        <span>${this.title}</span>
        <span>${this.genre}</span>
        <span>${this.description}</span>
        <span>${this.author}</span>
        </article>
`;
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