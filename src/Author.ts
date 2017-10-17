class Author{
    private _name: string;

    constructor() {
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}