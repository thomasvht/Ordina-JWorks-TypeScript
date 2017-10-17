class Movie extends Item implements Rating{
    render(element: HTMLElement): void {
        throw new Error("Method not implemented.");
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