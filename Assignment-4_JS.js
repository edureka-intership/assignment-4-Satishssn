// Solution:

//given array of restaurants:
const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
];

// a. Calculate the Average rating for all the restaurants.

const headers = Array.from(new Set(ratingData.map(({ restaurant }) => restaurant)));  
// Will give the unique result from Array of Objects ['KFC','Burger King']
let arr = [];
headers.map((head) => {
    let total = 0; // Initializing the total 
    let count = 0; // Initializing the count
    const filteredratingData = ratingData.filter(obj => obj.restaurant == head); 
    // Filtering the main Array for selected restaurant and then computing total, avg rating. 
    filteredratingData.map((item) => {
        total = filteredratingData.reduce((prev, next) => prev + next.rating, 0);
        count++;
    })
    arr.push({ 'restaurant': head, 'averageRating': (total / count).toFixed(2) });  
    // pushing the objects to final Array 
    return arr;
})
console.log("All restaurants & their avg. Rating:")
console.log(arr);

// b. List of all restuarants with average rating >=4.

let s= arr.filter(item => item.averageRating >= 4);  // Filtering the Array for restaurants AverageRating >= 4
console.log("avg. rating>=4:");
console.log(s);


// OutPut:
// a. All restaurants & their avg. Rating:
[
    { restaurant: 'KFC', averageRating: '4.00' },
    { restaurant: 'Burger King', averageRating: '4.00' },
    { restaurant: 'Domino', averageRating: '1.50' },
    { restaurant: 'Subway', averageRating: '3.50' },
    { restaurant: 'Pizza Hut', averageRating: '5.00' }
  ]

// b. avg. rating>=4:
  [
    { restaurant: 'KFC', averageRating: '4.00' },
    { restaurant: 'Burger King', averageRating: '4.00' },
    { restaurant: 'Pizza Hut', averageRating: '5.00' }
  ]