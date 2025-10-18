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
// const formSample = document.getElementById("formSample")
// const output = document.getElementById("output")

// formSample.addEventListener("submit",(e)=>{
// const username = document.getElementById("username").value
// const email = document.getElementById("email").value
// const age = document.getElementById("age").value
// const password = document.getElementById("password").value

//        e.preventDefault()
//        // console.log(inputVal)
//        output.innerHTML=`
//        <table border=1>
//               <tr>
//               <th>user</th>
//               <th>email</th>
//               <th>age</th>
//               <th>password</th>
//               </tr>
//               <tr>
//               <td>${username}</td>
//               <td>${email}</td>
//               <td>${age}</td>
//               <td>${password}</td>
//               </tr>
//        </table>
       
//        `
// })

// const passwordInput = document.getElementById('userPassword');
//   const hint = document.getElementById('passwordHint');

//   passwordInput.addEventListener('input', () => {
//     const pass = passwordInput.value;

//     if (pass.length < 8) {
//       hint.textContent = "Too short! (Need 8+ letters)";
//       hint.style.color = "red";
//     } 
//     else if (!/[A-Z]/.test(pass)) {
//       hint.textContent = "Add a CAPITAL letter!";
//       hint.style.color = "orange";
//     }
//     else {
//       hint.textContent = "Perfect!";
//       hint.style.color = "green";
//     }
//   });


// function checkPasswordStrength() {
//     const password = document.getElementById('password').value;
//     const bar = document.getElementById('strengthBar');
//     const text = document.getElementById('strengthText');
    
//     let strength = 0;
//     if (password.length > 0) strength += 20;
//     if (password.length >= 8) strength += 30;
//     if (/[A-Z]/.test(password)) strength += 20;
//     if (/[0-9]/.test(password)) strength += 20;
//     if (/[^A-Za-z0-9]/.test(password)) strength += 10;

//     bar.style.width = strength + '%';
    
//     if (strength < 50) {
//       bar.style.backgroundColor = 'red';
//       text.textContent = 'Strength: Weak';
//     } else if (strength < 80) {
//       bar.style.backgroundColor = 'orange';
//       text.textContent = 'Strength: Medium';
//     } else {
//       bar.style.backgroundColor = 'green';
//       text.textContent = 'Strength: Strong!';
//     }
//   }


//////fetch method example

// const FetchData = async ()=>{
//   try{
//     const response =await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     const userData = document.getElementById("userData")

//     userData.innerHTML = `
//       <h3>${data.name}</h3>
//       <p>${data.email}</p>
//       <p>${data.phone}</p>
//     `
//   }catch(error){
//     console.error("Fetching unsucessful",error)
//   }
// }

// document.getElementById("fetchBtn").addEventListener("click",FetchData)


// const FetchData = async ()=>{
//   try{
//     const response =await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     console.log(data)
//     const userData = document.getElementById("userData")

//     userData.innerHTML = '';

//     data.forEach((data) => {
//       const division = document.createElement('div');
//       division.classList.add("userCard");

//       division.innerHTML = `
//       <h3>${data.name}</h3>
//       <p>${data.email}</p>
//       <p>${data.phone}</p>
//     `
//     userData.appendChild(division)

//     });
    
//   }catch(error){
//     console.error("Fetching unsucessful",error)
//   }
// }

// document.getElementById("fetchBtn").addEventListener("click",FetchData)


const fetchData = async ()=>{
    const inputVal = document.getElementById("userId")
    const id = inputVal.value
    const userData = document.getElementById("userData");
    userData.innerHTML = "";
    if(!id){
      userData.innerHTML = `<p> Please enter the userId</p>`
    }
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if(!response.ok){
        userData.innerHTML= `<p> user not found</p>`
      }
      const data =await response.json();
      const div = document.createElement('div');
      div.classList.add('userCard');
      userData.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.email}</p>
      <p>${data.phone}</p>
      `
      userData.appendChild(div)
    }catch(err){
      console.error(err);
      userData.innerHTML= `<p>failed to fetch</p>`
    }
}

document.getElementById("fetchBtn").addEventListener("click",fetchData)







