const main = document.querySelector("main");
const body = document.querySelector("body");
body.style.backgroundColor = ('black');
// console.log(main)
let vid = document.getElementById("myVideo")
vid.style.width = "100%"
vid.style.marginBottom = "40px"
vid.style.paddingBottom= "50px"

const navBar = document.querySelector("#top-bar");

//set the height to 100%

navBar.style.height = "100%";

navBar.style.background = "white";

navBar.classList.add("flex-around");

navBar.appendChild(vid);
// let vidCtn = document.createElement("div");
// console.log(vidCtn);
// let vid = document.createElement("video");
// vidCtn.appendChild(vid);
// console.log(vid);
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
   pics.src = element.URL // selecting photo, allowing the photo to show
   main.appendChild(pics) // attaching "pics" to the "main" element
    pics.style.height = "20vh"
    pics.style.border = "outset, 10px, silver"
    pics.style.margin = "20px"
    pics.style.alignItems ="center"
    // pics.style.boxShadow = " 20px"
    // pics.style.borderSpacing =
    // pics.style.
});