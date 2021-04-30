function submitData(name, email) {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    };
      
      // method: "POST" is missing from the object below
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object)
          let h2 = document.createElement('h2');
          h2.innerHTML = object.id;
          document.body.appendChild(h2);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });

}
// let formData = {
//     name: "Steve",
//     email: "steve@steve.com"
// };
  
//   // method: "POST" is missing from the object below
// let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

//     fetch("http://localhost:3000/users", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object)
//       let h2 = document.createElement('h2');
//       h2.innerHTML = object.id;
//       document.body.appendChild(h2);
//     })
//     .catch(function(error) {
//         let h3 = document.createElement('h3');
//         h3.innerHTML = error.message;
//         document.body.appendChild(h3);
//         console.log(error.message);
//     });
    
// }

