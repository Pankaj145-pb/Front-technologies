// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title:'Upadated New user',
//         name:'Raja',
//         UserId:3,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json));



document.getElementById('updateUserButton').addEventListener('click', fetchUserData);

function fetchUserData(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let output = '<h2>List Of Posts</h2>'
            output += '<ol>';
            users.forEach(function(users) {
                output += `

                    <div class="row" id="row-item">
                    <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                    <p class="card-text">
                     ${users.name} 
                    <br>
                    ${users.email}
                    <br>
                    ${users.address}
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
            