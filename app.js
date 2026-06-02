const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchInput");
const gifArea = document.querySelector("#gifArea");
const removeBtn = document.querySelector("#removeBtn");

const apiKey = "FpakDC8w9wh4loCOhsoP06HpOd0bUarY";

form.addEventListener("submit", async function(e){
e.preventDefault();

const searchTerm = input.value;

const response = await axios.get(
`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`
);

const gifs = response.data.data;

const randomIndex = Math.floor(Math.random() * gifs.length);

const gifURL = gifs[randomIndex].images.original.url;

const img = document.createElement("img");
img.src = gifURL;

gifArea.appendChild(img);

input.value = "";
});

removeBtn.addEventListener("click", function(){
gifArea.innerHTML = "";
});
