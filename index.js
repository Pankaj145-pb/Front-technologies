
  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json));



  // fetch('https://jsonplaceholder.typicode.com/posts/1', {
  //   method: 'DELETE',
  // })
  // .then((response) => response.json())
  // .then((json) => console.log(json));


// const element = document.querySelector('h1');
// const ele = document.createElement('p');
// ele.textContent = "JavaScript is awesome";
// element.appendChild(ele);




// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  



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


// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title:'Updated New User',
//         name:'Raja',
//         UserId: 2,
//     }),
//     headers:{
//         'Content-type':'application/json; charset=UTF-8',
//     },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

fetch('https://jsonplaceholder.typicode.com/users/1', {
      method:'DELETE',
});


let datas = [
  {
    id: 1,
  },{id:2},{id:2},{id:3},{id:4},
]

let updateData= datas.filter(data => data.id !== 1)
console.log(updateData)