class Movie {
    constructor(name,studio,rating = "PG"){
        this.name = name;
        this.studio = studio;
        this.rating = rating;

    }
}
function getPg(movies){
    return movies.filter(movie => movie.rating === "PG");
     
}


let movie1 = new Movie(
    "casino Royal",
    "Eon Productions",
    "PG13")

let movies = [
    new Movie ("Bad boys","universal Productions","PG-13"),
    new Movie("Justice league","Warner Bros Productions","PG"),
    new Movie("iron man","Marvel","PG"),
    new Movie("Shrek", "DreamWorks", "PG"),
    new Movie("The Lion King", "Disney", "G"),

]
let pgMovie = getPg(movies)
console.log(pgMovie)