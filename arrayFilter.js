const Animals = [    
	{name: 'Fluffykins' , species: 'rabbit' },
	{name: 'Caro' , species: 'dog' },
	{name: 'Hamilton' , species: 'dog'},
	{name: 'Harold', species: 'fish'},
	{name: 'Ursula' , species: 'cat'},
	{name: 'Jimmy', species: 'fish'}
]


let arrayFilter = function(array) {
    let filteredArray = []  //array to store filtered values
    
    for (let i = 0; i < array.length; i++){ //loop through each item in passeed array
        if (array[i].species === 'dog'){    //condition to check if species is a dog
            filteredArray.push(array[i])    //if dog save to array
        }
    }
     
    return filteredArray;   //return filtered array of dogs
}; 

// console.log (arrayFilter(Animals));


const result = Animals.filter(Animals => Animals.species === 'dog');
console.log(result);


// Must use filter method inside a new function
// Must return an array of dog"
// Must console.log the result and have the same output as step 1	

