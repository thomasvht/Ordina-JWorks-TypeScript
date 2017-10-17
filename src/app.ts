// function publishItems(title:string,genre:string,description:string) : void {
//
//     let article: HTMLElement = document.createElement("article")
//     article.innerHTML =
//         "<h3>" + title + "</h3>" +
//         "<p>" + genre + "</p>" +
//         "<span>" + description + "</span>";
//
//
//     document.getElementById("items").appendChild(article);
//
// }
//
// publishItems("Matrix","Thriller","Did you know, Neo is the one?");
//
// publishItems("Moby Dick","Drama","Is this fish for real?");

let library:Library = new Library();
library.publishItems();

/*
 //activate when you finished exercise 3
let jsonParser = new JSONParser();
jsonParser.getJSON("items.json", data => {

    let library:Library = Library.fromJSON(data);
    var itemContainer: HTMLElement = document.getElementById("items");
    library.getAll().forEach(item => item.render(itemContainer));

});
*/