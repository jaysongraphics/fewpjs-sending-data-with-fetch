let submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
     .then(Response => Response.json())
     .then((newID) => {
         document.body.innerHTML = newID['id']
        })
        
        .catch((error) => {
          document.body.innerHTML = error.message
    })
}
