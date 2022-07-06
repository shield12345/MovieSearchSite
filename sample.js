const movies = document.getElementById("Movies");
const searchBar = document.getElementById("searchBar");
const finalResults = document.getElementById("finalResults");
const begin =document.getElementById("Start");
let movieCharacters = [];

/*
 searchBar.addEventListener('keyup', (e) => {
     var searchString = e.target.value;
     const filteredMovies = movieCharacters.filter((character)=>{
         return(
             character.original_title.includes(searchString)
         );
     }); 
     console.log(filteredMovies);
 });
*/

 let baseURL = "https://api.themoviedb.org/3/";
 let configData = null;
 let baseImageURL = null;



 let getConfig = function(){
     let url = "".concat(baseURL, "configuration?api_key=0856ec3389bcfb69993ffb5e032fc056")
     fetch(url)
     .then((result)=>{
         return result.json();
     })
     .then((data) =>{
         baseImageURL = data.images.secure_base_url;
         configData = data.images;
         //runSearch(searchString);
     })
     .catch(function(err){
         alert(err);
     });
 }

 /*
 let runSearch = function(keyword){
     let url = "".concat(baseURL,"search/movie?api_key=0856ec3389bcfb69993ffb5e032fc056&query=", keyword);
     fetch(url)
     .then((result)=>{
         return result.json();
     })
     .then((data)=>{
         movies.innerHTML = JSON.stringify(data);
     })
 }

 document.addEventListener("DOMContentLoaded", getConfig);
 */

/*
let url = "".concat(baseURL,"search/movie?api_key=0856ec3389bcfb69993ffb5e032fc056&query=", searchString);
const loadCharacters = async() => {
    try{
        const response = await fetch(url);
        movieCharacters = await response.json();
        displayCharacters(movieCharacters);
    }
    catch(err){
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
       .map((character) => {
           return `
           <li class = "character">
           <h2>${character.original_title}<h2>
           </li>
           `;
       })
       .join(``);
       movies.innerHTML = htmlString;
};

loadCharacters();
*/

begin.addEventListener("click",startfunction);
let pres=0;
let prev=0;
function startfunction() {
    pres++;
    if(pres>prev)
    {
        finalResults.innerHTML="";
        prev++;
    }

        var searchstring = $("#searchBar").val()
        fetch("https://api.themoviedb.org/3/search/movie?api_key=0856ec3389bcfb69993ffb5e032fc056&language=en-US&query=" +searchstring)
        .then((response) => {
        return response.json()
        }).then((data) => {
        console.log(data.results[0].title);
        console.log(data.results[0].overview);
        console.log(data.results[0].poster_path);
        for(let i=0; i<1000; i++){
            finalResults.innerHTML+=
            "<ul>\
            <li>\
            <h2>" + data.results[i].title + "</h2>\
            <img  src = 'https://image.tmdb.org/t/p/w300" + data.results[i].poster_path + "'/>\
            <h3>Overview</h3>\
            <p>" + data.results[i].overview + "</p>\
            <h3>Release Date</h3> <p>" + data.results[i].release_date + "</p> \
            <h3>Popularity</h3> <p>" + data.results[i].popularity + "</p>\
            <h3>Vote Average</h3> <p>" + data.results[i].vote_average + "</p>  <h3>Vote Count</h3> <p>" + data.results[i].vote_count + "</p> \
            </li>\
            </ul>"     
        }
        });
        
    
  };
