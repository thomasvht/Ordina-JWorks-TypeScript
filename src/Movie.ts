class Movie extends Item implements Rating{
    render(element: HTMLElement): void {
        element.innerHTML = `
        <article>
        <span>${this.title}</span>
        <span>${this.genre}</span>
        <span>${this.description}</span>
        <span>${this.name}</span>
        <span>${this.age}</span>
        </article>
`;
    }

    private _age: number;
    private _name: string;


    constructor() {
        super();
    }


    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}