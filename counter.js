const countContainer = document.getElementById("countContainer")
countContainer.style.background = 'pink'
countContainer.style.padding = '20px'


let value = 1
const counter = document.createElement("p")
counter.textContent = value
countContainer.appendChild(counter)

const descbtn = document.createElement('button')
descbtn.textContent = "Decrement"

descbtn.addEventListener("click" , function(){
    value--;
    counter.textContent = value;
})
descbtn.style.color = 'red'

countContainer.appendChild(descbtn)


const incemntbtn = document.createElement('button')
incemntbtn.textContent = "Increment"

incemntbtn.addEventListener("click" , function(){
     value++;
    counter.textContent = value;
})
incemntbtn.style.color = 'green'

countContainer.appendChild(incemntbtn)
