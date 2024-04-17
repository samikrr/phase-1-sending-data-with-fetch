// Add your code here
//Send Data
//Handle the response
//Handle errors
//Return the Fetch chain
 
const submitData= () =>{
    const formData ={
        name: "Steve",
        email: "steve@steve.com"
    }
    
    const configObj= {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users" ,configObj)
    .then(response => response.json())
    .then(data => {
        document.body.textContent = data.id;
    })
    .catch(error => {
        document.body.textContent = error.message;
    });
    };
