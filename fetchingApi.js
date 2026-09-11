const fetchAndDispaly = document.getElementById("fechingandDisplayData")
const loadingspinner = document.getElementById('loading')
const userCards = document.getElementById("userCards");

const fetchingdata = async () =>{
    try{
        loadingspinner.style.display = "block"
        const api = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await api.json()
            displayData(data);

        console.log(data)
    }catch(error){
        console.error(error)
    }
    finally{
        loadingspinner.style.display = "none"

    }
} 

    function displayData(data){
        const users  = data.map(user => {
        return `
        <div class = 'user-card'>
        <h2>${user.name}</h2>
        <p class = 'email'>Email: ${user.email}</p>
        <p class = "phone">Phone: ${user.phone}</p>
        <p class = "company" >Company: ${user.company.name}</p>
      
        <div class="address">
                    <h3>Address</h3>
                    <p>Street: ${user.address.street}</p>
                    <p>City: ${user.address.city}</p>
                    <p>Zipcode: ${user.address.zipcode}</p>

                </div>
                </div>
        `
        })
    
    fetchAndDispaly.innerHTML += users.join("");
}
fetchingdata();
