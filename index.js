// Import stylesheets
import './style.css';

// Write Javascript code!
function sortArray(arr) {
  // Create an object to store the frequency of each element in the array.
  const frequencies = {};
  for (let i = 0; i < arr.length; i++) {
    frequencies[arr[i]] = (frequencies[arr[i]] || 0) + 1;
  }

  // Create an array to store the sorted elements.
  const sortedArray = [];

  // Iterate over the frequencies object and add the elements to the sorted array in order of decreasing frequency.
  for (const [element, frequency] of Object.entries(frequencies)) {
    for (let i = 0; i < frequency; i++) {
      sortedArray.push(element);
    }
  }

  // Return the sorted array.
  return sortedArray;
}



const arr = [0, 1, 1, 2, 2, 0];
const sortedArray = sortArray(arr);

console.log(sortedArray); // [0, 0, 1, 1, 2, 2]
