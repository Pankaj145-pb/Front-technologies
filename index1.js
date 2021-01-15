// if else 

function pos(a){
    let result;
    if(a>0){
        result = 'positive';
    }
    else{
        result = 'Not Positive';
    }
    return result;
}
console.log(pos(4));


// function bind()

// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//   const unboundGetX = module.getX;
//   console.log(unboundGetX());
  
//   const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());



//function apply()

// const array = [1,2,3,4];
// const letters = ['a','b','c'];
// const kix = array.push.apply(array, letters)
// console.log(kix);

// const num = [1,2,3,4,5];

// const max = Math.max.apply(null, num);

// console.log(max);


// array slice ()

// const arr1 = ['cows', 'dogs', 'pigs', 'goats', 'cats'];

// const result = arr1.splice(2);
// console.log(result)


// array push()

// const arr1 = ['cows', 'dogs', 'pigs'];

// const result = arr1.push('cats');

// console.log(arr1);



//array filter method

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter (word => word.length > 6);

// console.log(result);


//array fill() method

// const arr1 = [1,2,3,4,5];

// console.log(arr1.fill(0,2,4));



// array entries()

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();

// console.log(iterator1.next().value);

// array copy within

// const arr1 = ['a','b','c','d','e'];
// arr2 = arr1.copyWithin(0, 3, 4);

// console.log(arr2);



// array concat 

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,11];
// const arr3 = arr1.concat(arr2);


// window.alert(arr3);





// const select = document.querySelector('textarea');

// function done(event){
//     const txt = document.getElementById('demo');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     txt.textContent = ` You Selected: ${selection}`;
// }

// select.onselect = done;





// function logSelection(event) {
//     const log = document.getElementById('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
//   }
  
//   const textarea = document.querySelector('textarea');
//   textarea.onselect = logSelection;