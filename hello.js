

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
            