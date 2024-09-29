var randomNumber1=Math.floor((Math.random()*6)+1);

var randomNumber2=Math.floor((Math.random()*6)+1);

console.log(randomNumber1);
console.log(randomNumber2);

console.log(document.getElementsByTagName("img")[0].setAttribute("src","./images/dice"+randomNumber1+".png"));
console.log(document.getElementsByTagName("img")[1].setAttribute("src","./images/dice"+randomNumber2+".png"));

if(randomNumber1>randomNumber2){
    document.querySelectorAll("h1")[0].innerText="Player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelectorAll("h1")[0].innerText="Player 2 wins";
}else{
    document.querySelectorAll("h1")[0].innerText="Draw";
}