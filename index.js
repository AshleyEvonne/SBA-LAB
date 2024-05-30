const main = document.querySelector("main");
const body = document.querySelector("body");
body.style.backgroundColor = ('black');
// console.log(main)

let vidCtn = document.createElement("div");
console.log(vidCtn);
let vid = document.createElement("video");
vidCtn.appendChild(vid);
console.log(vid);
let imgArr = [
    {name:"", URL:""},
    {name:"", URL:""},
    {name:"", URL:""},
    {name:"", URL:""},
]
imgArr.forEach(element => {
   const pics = document.createElement("img"); //creating an img element
   pics.src = element.URL // selecting photo, allowing the photo to show
   main.appendChild(pics) // attaching "pics" to the "main" element
    
});