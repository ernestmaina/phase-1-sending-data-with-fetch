const { json } = require("express");

// Add your code here
function submitData(Name, Email) {
    // object that takes two strings as argument
    const userData = {
        Name:'name',
        Email:'email',
    };
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: "name",
          Email: "email",
        }),
      };
};

return fetch("http://localhost:3000/users",configurationObject)
 .then(res =>res. json)
 .then(data=> {

      // Access the newly assigned ID from the server response
      const newId= data.id;

      const idcontainer=document.createElement('div');
      idcontainer.textContent= 'New ID ${newId}';
      document.body.appendChild ('idcontainer');

      return(newId);

 })

 .catch(error => {
    console.error('Error:', error);
  });







