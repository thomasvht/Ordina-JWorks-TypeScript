//
// let library:Library = new Library();
// library.publishItems();
/*
 //activate when you finished exercise 3
let jsonParser = new JSONParser();

jsonParser.getJSON("items.json", data => {
    
    let library:Library = Library.fromJSON(data);

    var itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));
    
});
*/
var jsonParser = new JSONParser();
jsonParser.getJSON("items.json", function (data) {
    var library = Library.fromJSON(data);
    var itemContainer = document.getElementById("items");
    library.getAll().forEach(function (item) { return item.render(itemContainer); });
});
//# sourceMappingURL=app.js.map