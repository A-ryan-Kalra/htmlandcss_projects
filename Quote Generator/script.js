let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote")
let person=document.querySelector(".person")

const quotes=[{quote:"Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.",person:"Anonymous"
},{
    quote:"You never really learn much from hearing yourself speak.",
    person:"George Clooney"
},{
    quote:"Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty",
    person: "John F. Kennedy"
},{
    quote:"Life is like riding a bicycle. To keep your balance, you must keep moving." ,
    person:"Albert Einstein"
},{
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    person:"Steve Jobs"
},{
    quote:"“Maybe that’s what life is… a wink of the eye and winking stars.”",
    person:"Jack Kerouac"
},];

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
    console.log(random)
})