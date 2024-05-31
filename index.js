const main = document.querySelector("main");
const body = document.querySelector("body");
const h1 = document.querySelector("h1")
// const nav = document.querySelector("nav");
body.style.backgroundColor = ('black');
// console.log(main)
//  h1.innerText = "RECORD"
//  main.appendChild(h1)
let vid = document.getElementById("myVideo")
vid.style.width = "100%"
vid.style.marginBottom = "40px"
vid.style.paddingBottom= "50px"



const navBar = document.querySelector("#top-bar");
// console.log(navBar)


navBar.style.height = "50px"
navBar.style.width ="100%"
navBar.style.background = "black"
navBar.classList.add ("flex-around")
// navBar.style.position ="absolute"
console.log(navBar)

let navLinks =[
    {text:'about', href:'/about'},
    {text:'shop', href:'/shop'},
    {text:'cart', href:'/cart'},
    {text:'account', href:'account'},
];
navLinks.forEach((link) => {
    //creating an anchor element
    const aElement = document.createElement("a");
    //add href to a elements
    aElement.href = link.href;
    //add text content
    aElement.textContent = link.text;
    //append new element to the navbar element
    navBar.appendChild(aElement);
    aElement.style.color = "white"
});
navBar.style.margin = "3px";

const topNav = document.querySelector("a");
// console.log(topNav);
navBar.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(event.target.tagName);
    if(event.target.tagName !== "A") return;
});

let imgArr = [
    {name:"MJ", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584546580179-8WFX8KO96PQV5PLL4RES/712aTlKjhqL._SL1500_.jpg?format=750w"},
    {name:"Prince", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584637138583-MAJSHNGWW4J11O4AMA4P/image-asset.jpeg?format=750w"},
    {name:"Whitney", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584552892911-CMPC8GUHTQ3BLVBCZQ92/R-523775-1224628874.jpeg.jpg?format=750w"},
    {name:"Marvin", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584549649539-Q3R8385GK5G3M8XONLR3/file-20180329-189807-fofptc.jpg?format=750w"},
    {name:"Bob Marley", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584548090667-0N8WH94VLBKRAVV9T6KR/71EFb-BEAeL._SL1400_.jpg?format=750w"},
    {name:"Anita", URL:"https://images.squarespace-cdn.com/content/v1/5b0487ff620b85272892562c/1584552744790-JBPEEPWK5HKLIXPY464N/71bd2KuN3lL._SS500_.jpg?format=750w"},
]
imgArr.forEach(element => {
   const pics = document.createElement("img"); //creating an img element
   const btn = document.createElement("button");
   pics.src = element.URL // selecting photo, allowing the photo to show
   main.appendChild(pics) // attaching "pics" to the "main" element
   pics.appendChild(btn)
    pics.style.height = "20vh"
    pics.style.border = "outset, 10px, darkgoldenrod "
    pics.style.margin = "40px"
});