// const heading = document.getElementById("heading");
// const queryH2 = document.querySelector("h2")
// const queryClass = document.querySelector(".heading")
// const queryAllH2 = document.querySelectorAll('h2')
// const queryAllClass = document.querySelectorAll(".heading")
// const tagheading = document.getElementsByTagName("h2");
// const classHeading = document.getElementsByClassName("heading");
// console.log(heading)
// console.log(queryH2)
// console.log(queryAllH2)
// console.log(queryAllClass)
// console.log(queryClass)
// console.log(tagheading);
// console.log(classHeading);
// heading.style.color = "red";
// tagheading[0].style.color = "red"
// tagheading[1].style.color = "red"
// classHeading[0].style.color = "red"
// classHeading[1].style.color = "red"   
// queryH2.style.color="red"
// queryClass.style.color="red"
// queryAllH2.forEach((heading2)=>{
//     heading2.style.color="red"
// })
// queryAllClass.forEach((classHeading)=>{
//     classHeading.style.color="red"
// })


const data = document.querySelector("h1");

// data.textContent = "this is a js written text"
// data.innerHTML = "<p>this is an inner html content </p>"

// const main = document.getElementById("main");
// const newDiv = document.createElement("div")
// newDiv.innerHTML = "<h1>this is an new division </h1>"
// newDiv.setAttribute("class","newDiv")
// main.appendChild(newDiv)

const anchorTag = document.getElementById("anchorTag")

const attr=anchorTag.getAttribute("href")
console.log(attr)

anchorTag.setAttribute("href","https://www.flipkart.com/")

const card = document.getElementById("card")
card.innerHTML=`<img src="../images/download.jpeg" alt="image">
       <h1>Title</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio reiciendis ab illum laboriosam? Sapiente facilis provident fugit in. Dicta quas veniam ex minus modi quo natus quasi, sed possimus.</p>`