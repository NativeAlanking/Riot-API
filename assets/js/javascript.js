const API_KEY = "RGAPI-6942d985-db0e-4753-acf2-23cd45678324";
//var requestUrl = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/KingAlanGG?api_key=RGAPI-61337794-3a31-47ca-bb47-79336bc246f0";
var totalAPI = "";
var APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
var winlossRatio = document.querySelector('#testParam');
var getSummoner = document.querySelector('#inputSummoner');
var btnGetSummoner = document.querySelector('#getButton');
var strSummoner = "";
winlossRatio.textContent = "Test";

btnGetSummoner.addEventListener("click", function() {
    //only works once reconcating too many times 
    totalAPI = APICallString + getSummoner.value + "?api_key=" + API_KEY;
    //strSummoner = getSummoner.textContent;
    //winlossRatio.textContent = strSummoner;
    console.log(totalAPI);
});
