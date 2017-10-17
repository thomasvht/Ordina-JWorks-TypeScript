var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, age, name) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    Movie.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<p>" + this.genre + " " + this.name + " " + this.age + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    return Movie;
}(Item));
//# sourceMappingURL=Movie.js.map