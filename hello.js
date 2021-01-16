
function addUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => {
        users.forEach(function(users){
            users.push(newUser)
        })
    }) 

  }



document.getElementById('updateUserButton').addEventListener('click', fetchUserData);

function fetchUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let output = '<h2>List Of Users</h2>'
            output += '<ol>';
            users.forEach(function(users) {
                output += `

                <div class="card text-black bg-secondary mb-3">
                <div class="col">
                <div class="card" style="width:29em;" >
                <div class="card-body">
                <h5 class="card-title">Details</h5>
      
                <p class="card-text">
               Name:- ${users.name}
               <br> 
               Email:- ${users.email}
               <br>
               Address:- ${users.address.street}
               <br>
               Suite:- ${users.address.suite}
               <br>
               City:- ${users.address.city}
               <br>
               Zipcode:- ${users.address.zipcode}
               </p>

               </div>
    </div>
  </div>
  </div>
      
                   
                    `
        
            });
            output += '</ol>'
            document.getElementById("response").innerHTML = output;
        });
    }






document.getElementById('addPostForm').addEventListener('submit', user);

function user(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let suite = document.getElementById('suite').value;
    let city = document.getElementById('city').value;
    let zipcode = document.getElementById('zip').value;

    const user = {
        name: name,
        email: email,
        address: address,
        suite: suite,
        city: city,
        zipcode: zipcode,
        
    };
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}




document.getElementById('updateUserButton').addEventListener('click', fetchUserData);

function addData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let output = '<h2>List Of Users</h2>'
            output += '<ol>';
            users.forEach(function(users) {
                output += `

                <div class="card text-black bg-secondary mb-3">
                <div class="col">
                <div class="card" style="width:29em;" >
                <div class="card-body">
                <h5 class="card-title">Details</h5>
      
                <p class="card-text">
               Name:- ${users.name}
               <br> 
               Email:- ${users.email}
               <br>
               Address:- ${users.address.street}
               <br>
               Suite:- ${users.address.suite}
               <br>
               City:- ${users.address.city}
               <br>
               Zipcode:- ${users.address.zipcode}
               <br>
               </p>

               </div>
    </div>
  </div>
  </div>
      
                   
                    `
        
            });
            output += '</ol>'
            document.getElementById("response").innerHTML = output;
        });
    }
