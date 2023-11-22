const button2= document.getElementById("btn")

const handleForm =(event)=>{

    event.preventDefault()

    const email = document.getElementById("i1").value
    const password = document.getElementById("i2").value
    
    const error0ne = document.getElementById("error1")
    const errortwo = document.getElementById("error2")

    if(!email){
       error0ne.textContent = "please enter an email"
    } else if(!password){
        errortwo.textContent = "please enter a password"
    }
    console.log({email, password});
    
}


button2.addEventListener("click",
handleForm)




let user

const fetchUsers = async ()=>{

    await fetch ('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())

      .then(userArray => user = userArray )


      const userContainer = document.querySelector(".users")

      user.forEach(each => {
        userContainer.innerHTML +=`

        <div class="card">
           <h1 class="name">${each.name}</h1>
           <h6>address${each.address.street}</h6>
           <h4>email${each.email}</h4>
           <h6>phone${each.phone}</h6>
           <h4>company${each.company.name}</h4>
        </div>
        `
        
      });
      
}
fetchUsers()


const allBody =document.querySelector("body")
const button =document.querySelector(".btnn")
const toggleDarkMode =()=>{
     allBody.classList.toggle("dark")
}
button.addEventListener("click", toggleDarkMode)