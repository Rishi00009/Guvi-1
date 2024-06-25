class movie {
    constructor(name,studio,rating = "PG"){
        this.name = name;
        this.studio = studio;
        this.rating = rating;

    }
getPg(){
    return this.rating
     
}
}
arr= [
    {new movie(
    this.name = "casino Royal",
    this.studio = "Eon Productions",
    this.rating = "PG13",
    
)}
,
 {   movie2 = new movie(
    this.name = "Bad boys",
    this.studio = "universal Productions",
    
)}
,{
movie3 = new movie(
    this.name = "Justice league",
    this.studio = "Warner Bros Productions",
    this.rating = "PG",
)}
,
{
movie4 = new movie(
    this.name = "iron man",
    this.studio = "Marvel",
    this.rating = "PG",
)}
]
let pgMovie = []
for(let i = 0 ; i < Array.length ; i++ ){
    if(arr[i].getPg=="PG"){
        pgMovie.push(this.name)
    }
}