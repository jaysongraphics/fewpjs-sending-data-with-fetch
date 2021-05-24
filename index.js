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
     .then((Response) => {
         document.body.innerHTML = Response['id']
        })
        
        .catch((error) => {
          document.body.innerHTML = error.message
    })
}
