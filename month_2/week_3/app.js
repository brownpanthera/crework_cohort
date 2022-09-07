const btn = document.getElementById("btn");
btn.addEventListener("click", getQuote);

function getQuote() {

  // I did this because I needed to clear the data, tho naming convention is not good. and why title is working without even .....
  let p = document.getElementById("quote");
  let h5 = document.getElementById('character')
  p.innerHTML = "";
  h5.innerHTML = "";
  title.innerHTML = "";

  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {

      // ANIME TITLE
      let animeTitle = data.anime;
      let title = document.getElementById("title");
      title.append(animeTitle);
      
      //ANIME CHARACTER
      let animeCharacter = data.character;
      let character = document.getElementById('character');
      character.append(animeCharacter);

      // ANIME QUOTE
      let animeQuote = data.quote;
      let quote = document.getElementById("quote");
      quote.append(animeQuote);

    })
    .catch((err) => console.log(err));
}
getQuote();

console.log("checking console xD");