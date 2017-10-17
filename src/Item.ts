abstract class Item {
    private _title: string;
    private _genre: string;
    private _description: string;

    constructor() {
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get genre(): string {
        return this._genre;
    }

    set genre(value: string) {
        this._genre = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    abstract render(element: HTMLElement): void;
}