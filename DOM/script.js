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


// const data = document.querySelector("h1");

// data.textContent = "this is a js written text"
// data.innerHTML = "<p>this is an inner html content </p>"

// const main = document.getElementById("main");
// const newDiv = document.createElement("div")
// newDiv.innerHTML = "<h1>this is an new division </h1>"
// newDiv.setAttribute("class","newDiv")
// main.appendChild(newDiv)

// const anchorTag = document.getElementById("anchorTag")

// const attr=anchorTag.getAttribute("href")
// console.log(attr)

// anchorTag.setAttribute("href","https://www.flipkart.com/")

// const card = document.getElementById("card")
// card.innerHTML=`<img src="../images/download.jpeg" alt="image">
//        <h1>Title</h1>
//        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos distinctio reiciendis ab illum laboriosam? Sapiente facilis provident fugit in. Dicta quas veniam ex minus modi quo natus quasi, sed possimus.</p>`


// event handling (click,doubleClick,hover,submit etc.,.)

// const submit = document.getElementById("submit")
// const sampleDiv = document.getElementById("sampleDiv")
// submit.addEventListener("click",()=>{
//    sampleDiv.innerHTML="<p>this is added after clicking the button </p>"    
// })


// const lightmode = document.getElementById("lightmode")
// const darkmode = document.getElementById("darkmode")

// lightmode.addEventListener("dblclick",()=>{
//        document.body.style.backgroundColor="white"
//        document.body.style.color="black"

// })
// darkmode.addEventListener("mouseover",()=>{
//        document.body.style.backgroundColor="black"
//        document.body.style.color="white"
// })


// form handling 
// task form need to contain username,emailid,age,password after submit it need to be print in the table 
const formSample = document.getElementById("formSample")
const output = document.getElementById("output")

formSample.addEventListener("submit",(e)=>{
const username = document.getElementById("username").value
const email = document.getElementById("email").value
const age = document.getElementById("age").value
const password = document.getElementById("password").value

       e.preventDefault()
       // console.log(inputVal)
       output.innerHTML=`
       <table border=1>
              <tr>
              <th>user</th>
              <th>email</th>
              <th>age</th>
              <th>password</th>
              </tr>
              <tr>
              <td>${username}</td>
              <td>${email}</td>
              <td>${age}</td>
              <td>${password}</td>
              </tr>
       </table>
       
       `
})










